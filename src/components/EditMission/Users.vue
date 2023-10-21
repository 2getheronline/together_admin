<template lang="html">
    <section class="users">
        <v-card class="pa-5 mb-7">
            <v-card-title>{{$t('user_preformance')}}</v-card-title>
            <v-row>
                <v-col md="4" sm="8">
                    <v-text-field :label="$t('users')" type="number" v-model="mission.limit" filled single-line>
                        <template v-slot:append>
                            {{$t('Users')}}
                        </template>

                </v-text-field>
            </v-col>
            <v-col md="4" sm="8">
                <v-text-field :label="$t('points')" type="number" v-model="mission.points" filled single-line :rules="pointsRules">
                    <template v-slot:append>
                        {{$t('Points')}}
                    </template>
                </v-text-field>
            </v-col>
        </v-row>
    </v-card>
    <!-- <v-card class="pa-5">
        <v-card-title>{{$t('groups')}}</v-card-title>
        <v-btn v-for="act in actions" outlined class="ma-5">{{act}}</v-btn>
        <v-col md="4" sm="8">
            <v-autocomplete v-model="mission.country" :label="$t('countries')" outlined :items="['All Countries']"></v-autocomplete>
            <v-autocomplete v-model="mission.groups" chips multiple item-text="name" item-value="id" :label="$t('groups')" :items="groups" outlined></v-autocomplete>
        </v-col>
    </v-card>-->
</section>
</template>

<script lang="js">
export default {
    name: 'users',
    props: [],
    mounted() {

    },
    data() {
        return {
            pointsRules: [
                v => !!v || 'Points is required'
            ],
        }
    },
    methods: {

    },
    computed: {
        mission() {
            return this.$store.getters.currentMission;
        },
        groups() {
            return this.$store.getters.groups.length ? this.$store.getters.groups : [];
        }

    }
}
</script>

<style lang="scss" scoped>
.users {}
</style>
