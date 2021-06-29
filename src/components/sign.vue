<template>
    <div  class="sign-block">
        <img :src="'./images/'+name+'.svg'">
        <div v-if='title' class="sign-title">
            <span ><small>{{title}}</small></span>
        </div>
        <div v-if='comment'  class="sign-description" style="margin-top:5px;">
            <span ><b>{{comment}}</b></span>
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
<style lang="scss">
.sign-block{
    text-align:center;
    display:inline-block;
    margin-right:15px;
    vertical-align:top;
    width: 250px;
    margin-bottom:1.125rem;
    img{
        margin-bottom: 1rem;
        width:160px;
    }
}
.sign-description{
    span{
        max-width:250px;
        text-align:center;
        color:#ccf;
        font-size:1rem
    }
}
.sign-title{
    span{
        max-width:200px;
        text-align:center;
        font-size:1rem;
        line-height:140%;
        small{

        }
    }
}
@media screen and (max-width:960px){
    .sign-block{
        img{
            width:120px;
        }
    }
    .sign-title,
    .sign-description{
        span{
            font-size:0.8rem
        }
    }

}

</style>
