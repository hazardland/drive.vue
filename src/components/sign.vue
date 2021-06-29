<template>
    <div style="text-align:center;display:inline-block;margin-right:15px;vertical-align:top;width: 250px; margin-bottom: 25px">
        <img :src="'./images/'+name+'.svg'" style="width:160px">
        <div v-if='title'>
            <span style='max-width:200px;text-align:center;'><small>{{title}}</small></span>
        </div>
        <div v-if='comment' style="margin-top:5px;">
            <span style='max-width:250px;text-align:center;color:#ccf'><b>{{comment}}</b></span>
        </div>
    </div>
</template>

<script>
const titles = {
    'railway': 'შლაგბაუმიანი რკინიგზა',
    'train': 'უშლაგბაუმო რკინიგზა',
    'worker': 'საგზაო სამუშაოები',
    'kids': 'ბავშვები გზაზე',
    'bridge': 'გასახსნელი ხიდი',
    'coast': 'სანაპიროზე გასასვლელი',
    'nodrive': 'მოძრაობა აკრძალულია',
    'noenter': 'შესვლა აკრძალულია',
    'noengine': 'ყველა მექანიკური სატრანსპონტო საშუალებით მოძრაობა აკრძალულია',
    'notruck': 'სატვირთო მოძრაობა აკრძალულია',
    'nomotorcycle': 'მოტოციკლით მოძრაობა აკრძალულია',
    'noattach': 'მისაბმელით მოძრაობა აკრძალულია',
    'notractor': 'ტრაქტორით აკრძალულია',
    'noanimal': 'საჭაპნე ტრანსპორტით მოძრაობა აკრძალულია',
    'nomass': 'მასის შეზღუდვა',
    'noleft': 'მარცხნივ შეხვევა აკრძალულია',
    'noright': 'მარჯვნივ შეხვევა აკრძალულია',
    'noturn': 'მობრუნება აკრძალულია',
    'nostop': 'გაჩერება აკრძალულია',
    'nostay': '5 წუთზე მეტი დროით დგომა აკრძალულია',
    'nostay1': 'თვის კენტ რიცხვებში დგომა აკრძალულია',
    'nostay2': 'თვის ლუწ რიცხვებში დგომა აკრძალულია'
}
export default {
    props: {
        name: String,
        comment: String
    },
    computed: {
        title () {
            return titles[this.name]
        }
    }
}
</script>
