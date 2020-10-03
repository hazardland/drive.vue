from tickets import tickets
from PIL import Image

crop_1 = 544
crop_2 = 234

for ticket in tickets.values():
    if ticket['crop'] != 3:
        print(ticket['id'])
        image = Image.open('./public/images/'+str(ticket['id'])+'.jpg')
        image = image.crop((0, 0, 1006, crop_1 if ticket['crop'] == 1 else crop_2))
        #image.show()
        image.save('./public/images_cropped/'+str(ticket['id'])+'.jpg')
        #break

    # has_mxolod = False
    # has_rogorc = False
    # for answer in ticket['answers']:
    #     if answer['text'].startswith('მხოლოდ'):
    #         has_mxolod = True
    #     if answer['text'].startswith('როგორც'):
    #         has_rogorc = True

    # if has_mxolod and has_rogorc:
    #     for answer in ticket['answers']:
    #         if answer['correct']:
    #             print(answer['text'])

