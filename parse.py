import sys
import os
import urllib.request
from bs4 import BeautifulSoup
import re
import json

class color():
    black = lambda x: '\033[30m' + str(x)+'\033[0;39m'
    red = lambda x: '\033[31m' + str(x)+'\033[0;39m'
    green = lambda x: '\033[32m' + str(x)+'\033[0;39m'
    yellow = lambda x: '\033[33m' + str(x)+'\033[0;39m'
    blue = lambda x: '\033[34m' + str(x)+'\033[0;39m'
    magenta = lambda x: '\033[35m' + str(x)+'\033[0;39m'
    cyan = lambda x: '\033[36m' + str(x)+'\033[0;39m'
    white = lambda x: '\033[37m' + str(x)+'\033[0;39m'

if sys.platform.lower() == "win32":
    os.system('color')

def json_dump(value):
    if isinstance(value, set):
        return str(value)
    if hasattr(value, 'json') and callable(value.json):
        return value.json()
    return value.__dict__


def save(file, data):
    with open(file, 'w', encoding='utf-8') as outfile:
        json.dump(data, outfile, default=json_dump, ensure_ascii=False, indent=4)


def fetch_items(ticket_id=1792):
    url = 'http://teoria.on.ge/tickets?ticket='+str(ticket_id)
    print(color.yellow('Processing ticket '+str(ticket_id)))
    request = urllib.request.Request(
            url,
            data=None,
            headers={
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.1916.47 Safari/537.36'
            }
        )

    response = None
    try:
        response = urllib.request.urlopen(request)
    except Exception as error:
        print(error)
        return False

    if not response:
        return False

    html = response.read().decode('UTF-8')
    soup = BeautifulSoup(html, 'html5lib')
    links = soup.find('div', {'class': 'text-content'})
    first = True
    tickets[ticket_id] = {'id':ticket_id, 'categories':list(), 'crop':0}
    for a in links.find_all('a'):
        if first:
            first = False
            result = re.search('\/tickets/[0-9]+\/([0-9]+)', a['href'])
            subject_id = int(result.group(1))
            subject_title = a.string
            print(subject_id, subject_title, a['href'])
            subjects[subject_id] = {'id':subject_id, 'title':subject_title}
            tickets[ticket_id]['subject'] = subject_id
        else:
            result = re.search("\/tickets/([0-9]+)\/[0-9]+", a['href'])
            category_id = int(result.group(1))
            category_title = a.string[1:-1]
            categories[category_id] = {'id':category_id, 'title':category_title}
            print(category_id, category_title, a['href'])
            tickets[ticket_id]['categories'].append(category_id)
    ticket = soup.find('article')
    #print(ticket['class'])
    if 'cutoff-1' in ticket['class']:
        tickets[ticket_id]['crop'] = 1
    elif 'cutoff-2' in ticket['class']:
        tickets[ticket_id]['crop'] = 2
    elif 'cutoff-3' in ticket['class']:
        tickets[ticket_id]['crop'] = 3

    tickets[ticket_id]['question'] = ticket.find('p', {'class':'t-question-inner'}).find('span').string
    print(color.yellow(tickets[ticket_id]['question']))
    answers = ticket.find('div', {'class':'t-cover'})
    tickets[ticket_id]['answers'] = []
    for p in answers.find_all('p'):
        if not 'ans-empty' in p['class']:
            answer_text = p.find('span', {'class':'text-wrap'}).string
            answer_correct = p.has_attr('data-is-correct-list')
            tickets[ticket_id]['answers'].append({'text':answer_text, 'correct':answer_correct})
            if answer_correct:
                print(color.cyan(answer_text))
            else:
                print(color.red(answer_text))

    description = ticket.find('div', {'class':'desc-box-inner'}).find('p').string
    print(color.green(description))
    tickets[ticket_id]['description'] = description

    return True

categories = dict()
subjects = dict()
tickets = dict()

ticket_id = 1
while ticket_id <= 1792:
    while not fetch_items(ticket_id):
        pass
    ticket_id += 1


# fetch_items(691)
# print(categories)
# print(subjects)
# print(tickets)

save('categories.json', categories)
save('subjects.json', subjects)
save('tickets.json', tickets)
