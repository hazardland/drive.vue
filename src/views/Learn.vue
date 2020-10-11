<template>
    <div class='page'>
        <h2>მაფრთხილებელი ნიშნები</h2>
        <p>მაფრთხილებელი ნიშნები <b>და<u>უ</u>სახლებელ</b> პუნქტში იდგმება 150-300 მეტრის მანძილზე, ხოლო <b>დასახლებულ</b> პუნქტში 100-150 მეტრის მანძილზე</p>

        <p style='color:#ccf'>
            გამონაკლისის სახით შემდეგი 6 მაფრთხილებელი ნიშანი შეიძლება დადგმული იქნას ობიექტის წინ არანაკლებ 50 მეტრის მანძილზე, ესენია:
        </p>

        <div>
            <sign name='railway' comment='რკგინიგზა'></sign>
            <sign name='train' comment='რკინიგზა'></sign>
            <sign name='worker' comment='ადამიანები'></sign>
            <sign name='kids' comment='ადამიანები'></sign>
            <sign name='bridge' comment='წყალი'></sign>
            <sign name='coast' comment='წყალი'></sign>
        </div>

        <p>თუ დააკვირდებით აღმოაჩენთ შემდეგ პატერნს, 2 რკინიგზასთან არის დაკავშირებული, 2 გზაზე მოძრავ ადამიანებს იცავს მძღოლის გაფრთხილებით, ხოლო ორიც წყალში გადავარდნის საფრთხესთან არის დაკავშირებული</p>

        <h2>ამკრძალავი ნიშნები</h2>
        <p>ამკრძალავი ნიშნებში ბილეთების პასუხების ლოგიკურად გამოსათვლელად საჭიროა შემდეგი 2 ნიშნის მნიშვნელობა გავითავისოთ:</p>
        <div>
            <sign name='nostop' comment='არ გვაძლევს 1 წამით შეჩერების საშაულებასაც კი [NO STOP]'></sign>
            <sign name='nostay' comment='შეგვიძლია შევჩერდეთ და მაქსიმუმ 5 წუთი ვიდგეთ [NO STAY]'></sign>
        </div>
        <p>ასევე არ უნდა აგვერიოს რომ შემდეგი ნიშანი გულისხმობს ყველანაირ მექანიკურ სატრანსპორტო საშუალებას მათ შორის სატვირთო ავტომობილს, მოტოციკლს, ტრაქტორს (და არა მხოლოდ მსუბუქ ავტომობილს)</p>
        <div>
            <sign name='noengine' comment='[NO ENGINE]'></sign>
        </div>
        <p>ამკრძალავ ნიშნებში 4 ძირითადი გამონაკლისია</p>
        <p>
        1. ნიშნის მოქმედება არ ვრცელდება სამარშრუტო სატრანსპორტო საშუალებაზე:
        </p>
        <div>
            <sign name='nodrive'></sign>
            <sign name='noengine'></sign><br>
            <sign name='noenter'></sign>
            <sign name='nostop' comment='ამ ნიშანზე არ დაქვემდებარებით სამარშრუტო მგზავრებს ჩამოსვამს ან აიყვანს'></sign><br>
            <sign name='noleft'></sign>
            <sign name='noright'></sign>
            <sign name='noturn'></sign><br>
        </div>

        <p>2. ნიშნის მოქმედება არ ვრცელდება სატრანსპორტო საშუალებაზე, რომელიც ემსახურება აღნიშნულ ზონაში მდებარე საწარმოს, ანდა ემსახურება ან ეკუთვნის ამავე ზონაში მცხოვრებ ან მომუშავე პირს. </p>

        <div>
            <sign name='nodrive'></sign>
            <sign name='noengine'></sign><br>
            <sign name='notruck'></sign>
            <sign name='nomotorcycle'></sign>
            <sign name='notractor'></sign>
            <sign name='noanimal'></sign>
            <sign name='noattach'></sign>

        </div>

        <p>3. ნიშნის მოქმედება არ ვრცელდება იმ სატრანსპორტო საშუალებაზე, რომელსაც მნიშვნელოვნად გამოხატული ან მკვეთრად გამოხატული შეზღუდული შესაძლებლობის სტატუსის მქონე პირი მართავს, ან იმ სატრანსპორტო საშუალებაზე, რომელსაც აღნიშნული პირები გადაჰყავს.</p>

        <div>
            <sign name='nodrive'></sign>
            <sign name='noengine'></sign><br>
            <sign name='nostay'></sign>
            <sign name='nostay1'></sign>
            <sign name='nostay2'></sign>
        </div>

        <p>4. ნიშნის მოქმედება არ ვრცელდება საფოსტო ავტომობილზე, რომელსაც ძარაზე აქვს თეთრი დიაგონალური ზოლი ლურჯ ფონზე, აგრეთვე ტაქსიზე, რომელსაც ჩართული აქვს ტაქსომეტრი.</p>
        <div>
            <sign name='nostay'></sign>
            <sign name='nostay1'></sign>
            <sign name='nostay2'></sign>
        </div>

        <p>ასევე გასათვალისწინებელია რომ მოპედისთვის დაშვებული მაქსიმალური სიჩქარე არის 45 კილომეტრი საათში.</p>
    </div>
</template>

<script>
import Sign from '@/components/sign.vue'

export default {
    components: {
        Sign
    }

}
</script>

<style>
    .sign{
        max-width: 160px !important;
    }
</style>
