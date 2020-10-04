<template>
    <div class='home'>
        <div class='status'>
            გაფილტრულია {{ filtered_count }} ბილეთი
         </div>
        <div class='status' @click='faileds=!faileds' :class='{active:faileds}'>
            რაც ამ თავში მეშლება ({{faileds_count}})
        </div>
        <div class='status' @click='notgoods=!notgoods' :class='{active:notgoods}'>
            რაც ამ თავში კარგად არ ვიცი ({{notgoods_count}})
        </div>
        <div class='categories'>
            <category
                v-for='category in categories'
                :key='category.id'
                :id='category.id'
                :title='category.title'
            >
            </category>
        </div>
        <div class='tickets'>
            <ticket v-for='ticket in filter()'
                :key='ticket.id'
                :id='ticket.id'
                :categories='ticket.categories'
                :subject='ticket.subject'
                :question='ticket.question'
                :crop='ticket.crop'
                :answers='ticket.answers'
                :description='ticket.description'
            >
            </ticket>
        </div>
        <div class='subjects'>
            <subject
                v-for='subject in subjects'
                :key='subject.id'
                :id='subject.id'
                :title='subject.title'
            >
            </subject>
        </div>
    </div>
</template>

<script>
import Ticket from '@/components/ticket.vue'
import Subject from '@/components/subject.vue'
import Category from '@/components/category.vue'

export default {
    name: 'Home',
    components: {
        Ticket,
        Subject,
        Category
    },
    methods: {
        filter () {
            const result = {}
            let filtered_count = 0
            let faileds_count = 0
            let notgoods_count = 0
            let goods_count = 0
            for (const [key, ticket] of Object.entries(this.tickets)) {
                let match = true
                if (ticket.subject !== this.subject) {
                    match = false
                }
                if (!ticket.categories.includes(this.category)) {
                    match = false
                }
                if (match) {
                    if (this.$store.state.tickets[key] >= 0) {
                        if (this.faileds) {
                            match = false
                        }
                    } else {
                        faileds_count++
                    }
                    if (this.$store.state.tickets[ticket.id] >= 3) {
                        if (this.notgoods) {
                            match = false
                        }
                        goods_count++
                    } else {
                        notgoods_count++
                    }
                }

                if (match) {
                    result[key] = ticket
                    filtered_count++
                }
            }
            this.filtered_count = filtered_count
            this.faileds_count = faileds_count
            this.notgoods_count = notgoods_count
            this.goods_count = goods_count
            return result
        }
    },
    data () {
        return {
            subject: 1,
            category: 2,
            filtered_count: 0,
            faileds_count: 0,
            notgoods_count: 0,
            goods_count: 0,
            faileds: false,
            notgoods: false
        }
    }
}

</script>

<style>
    .status{
        cursor: pointer;
        background: darkgrey;
        border: 1px solid grey;
        margin: 1px;
        padding: 6px;
        display: inline-block;
    }
    .categories {
    }
    .tickets {
        float: left;
    }
    .subjects {
        max-width: 200px;
        float:left;
    }
</style>
