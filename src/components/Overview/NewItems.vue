<template lang="html">
<section class="new-items">
    <v-card >
        <v-card-text>{{$t(title)}}</v-card-text>

        <v-list>
            <v-list-item v-for="item in items" two-line :to="getLink(item)">
                <v-list-item-avatar>
                    <v-img :src="user(item).avatar"></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                    <v-list-item-title>{{user(item).name}}</v-list-item-title>
                    <v-list-item-subtitle>{{item.address || item.title}}</v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-action>{{$util.timeAgo(item.created_at)}}</v-list-item-action>
            </v-list-item>
        </v-list>

    </v-card>
</section>
</template>

<script lang="js">
import {format} from 'date-fns'
export default {
    name: 'new-items',
    props: [
        'items',
        'title'
    ],
    mounted() {
        setInterval(() => {
            this.$forceUpdate()
        }, 20000);
    },
    data() {
        return {

        }
    },
    methods: {
        user(item) {
            return item.user || item
        },
        getLink(item){
            if (item.user){
                return 'messages?message=' + item.id
            } else {
                'users?user=' + item.id
            }
        }
    },
    computed: {}
}
</script>

<style lang="scss" scoped>
.new-items {
    overflow-y: scroll;
    height: 400px;
}
</style>
