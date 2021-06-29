<template>
    <div class="modal" :style="{display:show?'block':'none'}">

      <!-- Modal content -->
      <div class="modal-content" style="font-size:20px;max-width:1200px;overflow:show;position: relative">
        <span class="close" @click='close()'>&times;</span>
        <p>
            <img :src="'./images/modal.png'" style="float:left;display:inline-block;margin-right:20px">
            <span style="font-size:25px">მართვის მოწმობის თეორიის ონლაინ მასწავლებელი</span><br>&nbsp;<br>
            სისტემა გეხმარებათ აღრიცხოთ ბილეთები რომლებიც ხშირად გეშლებათ და ასევე ბილეთები რომლებიც აღარ გეშლებათ.</p>

        <p>მარჯვენა მხარეს საკითხების მენიუში:<p>
        <p> <span style='color:green;font-weight:bold'>მწვანედ აღინიშნება ისეთი ბილეთები რომლებსაც სხვადასხვა დროს სამჯერ ზედიზედ შეუცდომლად გაეცით პასუხი.</span> <span style='color:blue;font-weight:bold'>ლურჯად აღინიშნება ბილეთები რომლების სწავლის პროცესშიც ხართ, მაგრამ ჯერ სამჯერ ზედიზედ არ გაგიციათ სწორი პასუხი,</span> <span style='color:red;font-weight:bold'>ხოლო წითლად აღინიშნება ბილეთები რომლებსაც ბოლოს არასწორად გაეცით პასუხი.</span>
        </p>

        <p>გამოცდაზე შეგიძლიათ გახვიდეთ თამამად თუ ყველა საკითხის ქვეშ პროგრესბარი სრულად გამწვანდება.</p>

        <p>* გვერდის ყოველი დარეფრეშების დროს ბილეთების პასუხების რიგი ირევა, ბილეთების სწორი პასუხების ადგილების ვიზუალურად დამახსოვრების თავიდან ასარიდებლად.</p>

        <p>* ასევე ირევა თავში ბილეთების რიგი, რადგან მიყოლებით დალაგების შემთხვევაში ზოგჯერ სწორი პასუხი წინა ბილეთის შინაარსიდან გამომდინარეობს, ხოლო გამოცდაზე კი წინა ბილეთი არ გიჩანთ.</p>

        <p>* გვერდზე "ცოტა რამ ზოგიერთი რამის შესახებ" მოცემულია საკითხების შესაბამისი დამხმარე მასალა: წესების გამონაკლისი შემთხვევები და სხვადასხვა თეორიის მასწავლებლის ფრიად საინტერესი ვიდეო გაკვეთილები.</p>

      <button style='font-size:22px;background:blue;color:white;position:absolute;bottom:15px;right:15px;padding:5px;cursor:pointer;' @click='close()'>დახურვა</button>
      </div>
    </div>
</template>

<script>
export default {
    props: {
        visible: {
            type: Boolean,
            default: false
        }
    },
    data () {
        return {
            show: false
        }
    },
    mounted () {
        if (this.visible) {
            this.show = true
        }
    },
    methods: {
        close () {
            this.show = false
            this.$store.commit('greet')
        }
    }
}
</script>

<style>

/* The Modal (background) */
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
}

/* Modal Content */
.modal-content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  overflow: visible;
  min-height: 700px;
}

/* The Close Button */
.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
</style>
