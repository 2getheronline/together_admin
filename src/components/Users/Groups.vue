<template lang="html">
<section class="groups">
    <div class="scroll">
        <div v-for="group in groups">
            <v-card height="150" width="300" class="ma-3" :to="'groups/' + group.id">
                <v-row>
                    <v-col cols="2">
                        <v-avatar class="ma-3" color="grey">
                            <v-img v-if="group.image" :src="group.image"></v-img>
                            <v-icon v-else dark>mdi-account-group</v-icon>
                        </v-avatar>

                    </v-col>
                    <v-col cols="10">
                        <v-card-title>{{group.name}}</v-card-title>
                        <v-card-subtitle>
                            <v-icon small>mdi-account</v-icon>{{group.manager && group.manager.name}}
                        </v-card-subtitle>
                        <v-card-text>{{group.membersCount}} {{$t('members')}}</v-card-text>
                    </v-col>
                </v-row>
            </v-card>
        </div>

    </div>
    <router-link to="/groups">
        <div class="all_groups">{{$t('all_groups')}}</div>
    </router-link>
</section>
</template>

<script lang="js">
export default {
    name: 'groups',
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
.groups {
    position: relative;
}

.scroll {
    overflow-x: scroll;
    display: flex;
}

.all_groups {
    position: absolute;
    top: 0;
    right: 0;

    height: 90%;
    width: 150px;
    background-color: #f4f6fc;
    color: #2e5bff;
    font-size: 20px;
    font-weight: 500;

    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
