<template lang="html">
<section class="grid">
    <v-row>
        <v-col v-for="grp in groups" cols="3">
            <v-card :to="'/groups/' + grp.id">
                <v-row>
                    <v-col cols="2">
                        <v-avatar class="ma-3"  color="grey">
                            <v-img :src="grp.image" v-if="grp.image"></v-img>
                            <v-icon dark v-if="!grp.image">mdi-account-group</v-icon>
                        </v-avatar>

                    </v-col>
                    <v-col cols="10">
                        <v-card-title>{{grp.name}}</v-card-title>
                        <v-card-subtitle>
                            <v-icon small>mdi-account</v-icon>{{grp.manager.name}}
                        </v-card-subtitle>
                        <v-card-text>{{grp.membersCount}} {{$t('members')}}</v-card-text>
                    </v-col>
                </v-row>
            </v-card>
        </v-col>
    </v-row>

</section>
</template>

<script lang="js">
export default {
    name: 'grid',
    props: [],
    mounted() {

    },
    data() {
        return {

        }
    },
    methods: {

    },
    computed: {
        groups() {
            return this.$store.getters.groups
        }
    }
}
</script>

<style lang="scss" scoped>
.grid {}
</style>
