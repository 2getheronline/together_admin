<template lang="html">
<section class="tree">
    <v-treeview :items="groupsTree" :active.sync="active" activatable open-on-click>
        <template v-slot:append="{ item }">
            {{item.membersCount}} members
        </template>
        <template v-slot:append="{ item }">
            {{item.points}} points
        </template>
    </v-treeview>
</section>
</template>

<script lang="js">
export default {
    name: 'tree',
    props: [],
    mounted() {

    },
    data() {
        return {
            active: []
        }
    },
    methods: {
        getChilds(parent) {
            return this.groups
                .filter(x =>
                    x.parent == parent.id
                )
                .map(this.mapChild(parent, this))
        },
        mapChild: (parent, vue) => (x) => {
            var childs = vue.getChilds(x)
            var membersCount = childs && childs.reduce((x, y) => x + y.membersCount, 0) + x.membersCount
            var pointsCount = childs && childs.reduce((x, y) => parseFloat(x) + parseFloat(y.points), 0) + parseFloat(x.points)
            return {
                id: x.id,
                name: x.name,
                children: childs,
                points: pointsCount,
                membersCount: membersCount
            }
        }
    },
    computed: {
        groups() {
            return this.$store.getters.groups.length ? this.$store.getters.groups : []
        },
        groupsTree() {
            return this.groups
                .filter(x =>
                    x.parent == null
                )
                .map(this.mapChild(parent, this))
        },

      selected () {
        if (!this.active.length) return undefined

        const id = this.active[0]

        return this.groups.find(group => group.id == id)
    },

},
watch: {
    selected() {
        this.$router.push('/groups/' + this.selected.id)
    }
}
}
</script>

<style lang="scss" scoped>
.tree {}
</style>
