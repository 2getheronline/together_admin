<template lang="html">
<section class="edit  ml-10">
    <v-row class="mt-5">
        <v-col cols="10">
            <v-textarea solo v-model="newMessage.content" :placeholder="$t('placeholder')"></v-textarea>
            <v-row class="pa-3">
                <v-icon left @click="attach">mdi-attachment</v-icon>
                <v-icon left @click="link">mdi-link</v-icon>
                <v-icon left @click="style">mdi-abjad-hebrew</v-icon>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="send">
                    <v-icon small left>mdi-send</v-icon>send</v-btn>
            </v-row>
        </v-col>

    </v-row>
</section>
</template>

<script lang="js">
export default {
    name: 'edit',
    props: [
        'message'
    ],
    mounted() {

    },
    data() {
        return {
            newMessage:{}
        }
    },
    methods: {
        attach(){

        },
        link(){

        },
        style(){

        },
        send(){
            this.newMessage.title = "RE: " + this.message.title
            this.newMessage.parent = this.message.id
            this.$store.dispatch('sendMessage', this.newMessage)
        }
    },
    computed: {

    }
}
</script>

<style lang="scss" scoped>
.edit {}
</style>
