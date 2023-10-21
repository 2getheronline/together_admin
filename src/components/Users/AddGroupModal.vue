<template lang="html">
<section class="add-group-modal">
    <div class="text-center">
        <v-dialog v-model="dialog" width="500">
            <template v-slot:activator="{ on, attrs }">
                <v-btn outlined v-bind="attrs" v-on="on">{{$t('add_group')}}</v-btn>
            </template>

            <v-card>
                <v-card-title class="headline  lighten-2">
                    {{$t('add_group')}}
                </v-card-title>
                <v-form>
                    <v-text-field v-model="form.name" outlined class="ma-5" :label="$t('group_name')" :placeholder="$t('group_name_placeholder')"></v-text-field>
                    <v-row class="ma-5">
                        <v-text-field v-model="form.manager" outlined class="mr-1" :label="$t('group_manager')" :placeholder="$t('group_manager_mail')"></v-text-field>
                        <v-text-field v-model="form.location" outlined :label="$t('location')"></v-text-field>
                    </v-row>

                    <v-autocomplete deletable-chips ref="el" hide-selected hide-no-data :items="form.mails" @update:search-input="input" outlined class="ma-5" :label="$t('invite_members')" chips multiple v-model="form.mails"></v-autocomplete>
                    <v-textarea v-model="form.message" outlined class="ma-5" :label="$t('invite_message')" :placeholder="$t('invite_message_placholder')"></v-textarea>

                </v-form>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn @click="dialog = false">
                        {{$t('cancel')}}
                    </v-btn>
                    <v-btn color="primary" @click="send">
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
    name: 'add-group-modal',
    props: [],
    mounted() {

    },
    data() {
        return {
            dialog: false,
            searchInput: "",
            form: {
                mails: []
            }
        }
    },
    methods: {
        input(s) {
            if (!s || !s.includes(" ")) return

            this.form.mails.push(s) //.split(" ").slice(0, -1)
            this.$refs.el.lazySearch = ''
        },
        send(){
            this.$store.dispatch('addGroup', this.form)
            .then(x=>this.dialog = false)
        }
    },
    computed: {

    }
}
</script>

<style lang="scss" scoped>
.add-group-modal {}
</style>
