<template lang="html">
<section class="invite-user-modal">
    <div class="text-center">
        <v-dialog v-model="dialog" width="500">
            <template v-slot:activator="{ on, attrs }">
                <v-btn color="primary" v-bind="attrs" v-on="on">{{$t('invite_user')}}</v-btn>
            </template>

            <v-card>
                <v-card-title class="headline  lighten-2" >
                    {{$t('invite_user')}}
                </v-card-title>
                <v-from>
                    <v-text-field v-model="form.email" outlined class="ma-5" :label="$t('email_address')" :placeholder="$t('enter_email')"></v-text-field>
                    <v-textarea v-model="form.message" outlined class="ma-5" :label="$t('invite_message')" :placeholder="$t('invite_message_placholder')"></v-textarea>
                </v-from>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn @click="dialog = false">
                        {{$t('cancel')}}
                    </v-btn>
                    <v-btn color="primary" @click="invite">
                        {{$t('send_invitation')}}
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</section>
</template>

<script lang="js">
export default {
    name: 'invite-user-modal',
    props: [],
    mounted() {

    },
    data() {
        return {
            dialog: false,
            form: {}
        }
    },
    methods: {
        invite(){
            this.$store.dispatch('inviteUser',this.form)
            .then(x=>this.dialog = false)
        }
    },
    computed: {

    }
}
</script>

<style lang="scss" scoped>
.invite-user-modal {}
</style>
