<template lang="html">
<section class="details">

    <v-list>
        <v-list-item two-line v-for="f in fields">
            <v-list-item-content>
                <v-list-item-subtitle>
                    {{$t(f.field)}}
                </v-list-item-subtitle>
                <v-list-item-title>
                    <p>{{user[f.name]}}</p>
                </v-list-item-title>
            </v-list-item-content>
        </v-list-item>
    </v-list>
</section>
</template>

<script lang="js">
export default {
    name: 'details-com',
    props: [
        'user'
    ],
    mounted() {

    },
    data() {
        return {
            fields: [
                {
                    'field': 'email',
                    'name': 'email'
                },
                {
                    'field': 'phone',
                    'name': 'phone'
                },
                {
                    'field': 'account_created',
                    'name': 'created_at'
                },
            ]
        }
    },
    methods: {

    },
    computed: {

    }
}
</script>

<style lang="scss" scoped>
.details {}
</style>
