<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
    export default {
    metaInfo () {
        return {
            meta: [
                {property: 'og:title', content: 'მართვის მოწმობის თეორიის ონლაინ მასწავლებელი'},
                {property: 'og:site_name', content: 'მართვის მოწმობა'},
                {property: 'og:type', content: 'website'},
                {property: 'og:image', content: 'https://raw.githubusercontent.com/hazardland/drive.vue/master/readme.png'},
                {property: 'og:description', content: 'აპლიკაცია იმახსოვრებს ბილეთებს რომელშიც იჭრებით და იძლევა ცალკე დაფილტვრის საშუალებას, ნასწავლ ბილეთად თვლის ისეთ ბილეთს რომელზეც სხვადასხვა დროს 3-ჯერ ზედიზედ სწორად გაეცით პასუხი, ასევე თვალსაჩინოდ ასახავს თავების სწავლის პროცესს სხვადასხვა ინდიკატორებით. როდესაც ყველა თავის ქვეშ ყველა პროგრესბარი მთლიანად გამწვანდება შეგიძლიათ თამამად გახვიდეთ გამოცდაზე.'}
                ]
            }
        }
    }
</script>

<style lang="scss">
    html {
        font-family: Verdana
    }
</style>
