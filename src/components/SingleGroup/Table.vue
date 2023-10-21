<template lang="html">
<section class="table">
    <v-data-table :headers="headers" :items="users"
     class="elevation-1" >

        <template v-slot:item.avatar="{ item }">

                        <v-avatar color="grey">
                            <v-img :src="item.avatar" v-if="item.avatar"></v-img>
                            <v-icon dark v-if="!item.avatar">mdi-account</v-icon>
                        </v-avatar>

        </template>
        <template v-slot:item.view="{ item }">
            <v-btn text color="primary" @click="$emit('selectedUser', item)">{{$t("view")}}</v-btn>
        </template>
        <template v-slot:item.updated_at="{ item }">
            {{formatDate(item.updated_at)}}
        </template>
    </v-data-table>
</section>
</template>

<script lang="js">
import {
    format
} from 'date-fns'
export default {
    name: 'table-component',
    props: [
        'selectedUser',
        'users'
    ],
    model: {
        'props': 'selectedUser',
        'event': 'selectedUser'
    },
    mounted() {

    },
    data() {
        return {
            headers: [{
                    text: this.$t('avatar'),
                    value: 'avatar',
                }, {
                    text: this.$t('name'),
                    value: 'name',
                },
                {
                    text: this.$t('email'),
                    value: 'email'
                },
                {
                    text: this.$t('last_activity'),
                    value: 'updated_at'
                },
                {
                    text: this.$t('mission_preformed'),
                    value: 'deadline_date'
                },
                {
                    text: this.$t('score'),
                    value: 'points'
                },
                {
                    value: 'view'
                }
            ]
        }
    },
    methods: {
        formatDate(date) {
            return format(new Date(date), 'dd/mm/yyyy')
        },
    },
    computed: {}
}
</script>

<style lang="scss" scoped>
.table {}
</style>
