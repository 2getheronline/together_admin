<template lang="html">
<section class="messages">
    <v-row>
        <v-col cols="4">
            <List v-model="selectedMessage" />
        </v-col>
        <v-col cols="8" v-if="selectedMessage.id">
            <div id="scrollable">
                <Single :message="selectedMessage" />

                <Single v-for="mess in selectedMessage.childs" :message="mess" class="mt-5" />
            </div>
            <Edit :message="selectedMessage" />
        </v-col>
    </v-row>
</section>
</template>

<script lang="js">
import List from '../components/Messages/List'
import Single from '../components/Messages/Single'
import Edit from '../components/Messages/Edit'
export default {
    name: 'messages',
    props: [],
    components: {
        List,
        Single,
        Edit
    },
    mounted() {
        this.$store.dispatch('loadMessages')

         
    },
    data() {
        return {
            selectedMessage: {}
        }
    },
    methods: {

    },
    computed: {

    },
    watch: {
        'selectedMessage'() {
            this.$nextTick(t => {
                var container = this.$el.querySelector("#scrollable");
                container.scrollTop = container.scrollHeight;
            })
        }
    }
}
</script>

<style lang="scss" scoped>
#scrollable {

    height: 60vh;
    overflow-y: scroll;
    overflow-x: hidden;
}
</style>
