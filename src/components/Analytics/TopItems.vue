<template lang="html">
<section class="top-items">
    <v-card>
        <v-card-text>{{$t(title)}}</v-card-text>

        <v-list>
            <v-list-item v-for="item in items" two-line>
                <v-list-item-avatar>
                    <v-img :src="item.image || item.avatar"></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                    <v-list-item-title>{{item.name}}</v-list-item-title>
                    <v-list-item-subtitle>{{item.city}}, {{item.country}}</v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-action>
                    <v-list-item-title>
                        <v-icon>mdi-diamond-stone</v-icon>
                        {{$util.adThousands(item.points)}}
                    </v-list-item-title>
                    <v-list-item-subtitle v-if="item.level">{{item.level.name}}</v-list-item-subtitle>
                </v-list-item-action>
            </v-list-item>
        </v-list>

    </v-card>
</section>
</template>

<script lang="js">
export default {
    name: 'top-items',
    props: [
        'items',
        'title'
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
.top-items {
    overflow-y: scroll;
    height: 300px;
}
</style>
