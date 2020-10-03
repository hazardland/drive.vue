<template>
    <div class='home'>
        <div class='status'>
            სულ {{count}} ბილეთი
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
import tickets from '@/data/tickets.json'
import categories from '@/data/categories.json'
import subjects from '@/data/subjects.json'

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
            let count = 0
            for (const [key, ticket] of Object.entries(this.tickets)) {
                let match = true
                if (ticket.subject !== this.subject) {
                    match = false
                }
                if (!ticket.categories.includes(this.category)) {
                    match = false
                }
                if (match) {
                    result[key] = ticket
                    count++
                }
            }
            this.count = count
            return result
        }
    },
    data () {
        return {
            subject: 1,
            category: 2,
            count: 0,
            tickets: tickets,
            categories: categories,
            subjects: subjects
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
