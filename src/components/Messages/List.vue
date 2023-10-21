<template lang="html">
<section class="list">
    <v-list>
        <v-list-item v-for="mess in messages" two-line @click="$emit('selectedMessage', mess);">
            <v-list-item-avatar>
                <v-img :src="mess.user.avatar"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
                <v-list-item-title>
                    {{mess.user.name}}
                </v-list-item-title>
                <v-list-item-subtitle>
                    {{mess.title}}
                </v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action>
                {{$util.timeAgo(mess.created_at)}}
            </v-list-item-action>
        </v-list-item>
    </v-list>
</section>
</template>

<script lang="js">
export default {
    name: 'list',
    props: ['selectedMessage'],
    model: {
        'props': 'selectedMessage',
        'event': 'selectedMessage'
    },
    mounted() {},
    data() {
        return {
            // id: null
        }
    },
    methods: {

    },
    computed: {
        messages() {
            return this.$store.getters.messages.data
        }
    },
    watch: {
        'messages'() {
            // if (this.id) {
            //     this.$emit('selectedMessage', this.messages.find(x => x.id == this.id))
            // }

            if (this.$route.query.message) {
                var message = this.messages.find(x => x.id == this.$route.query.message)

                if (message)this.$emit('selectedMessage', message)
            }
        },

    }
}
</script>

<style lang="scss" scoped>
.list {
    height: 87vh;
    overflow-y: scroll;
}
</style>
