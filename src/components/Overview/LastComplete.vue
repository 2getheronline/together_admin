<template lang="html">
<section class="last-complete">
    <v-card>
        <v-card-text>{{$t('last_completes_messions')}}</v-card-text>
        <v-list>
            <v-card outlined class="ma-3 pa-0" v-for="mission in missions">
                <div class="d-flex flex-no-wrap ">
                    <v-avatar size="95" tile>
                        <v-img :src="mission.image"></v-img>
                    </v-avatar>
                    <div>
                        <v-card-title>{{mission.title}}</v-card-title>
                        <v-card-subtitle><v-icon>mdi-account</v-icon>{{mission.current}} of {{mission.limit}}</v-card-subtitle>
                    </div>
                    <v-spacer></v-spacer>
                    <v-avatar size="95" >
                        <v-icon>mdi-ok</v-icon>
                    </v-avatar>
                </div>
            </v-card>
        </v-list>

    </v-card>
</section>
</template>

<script lang="js">
export default {
    name: 'last-complete',
    props: [
        'missions'
    ],
    mounted() {

    },
    data() {
        return {

        }
    },
    methods: {

    },
    computed: {

    }
}
</script>

<style lang="scss" scoped>
.last-complete {

    overflow-y: scroll;
    height: 300px;
}
</style>
