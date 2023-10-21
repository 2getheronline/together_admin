<template lang="html">
<section class="filter-bar">
    <div class="box">
        <h3>{{$t('filter')}}</h3>

        <div class="input-field">
            <label for=keyword>{{$t('keyword')}}</label>
            <input v-model="filter.q"  v-on="$listeners"/>
        </div>

        <div class="input-field">
            <label for=status>{{$t('status')}}</label>
            <select v-model="filter.status"  v-on="$listeners">
                <option v-for="status in statuses" :value="status.id">{{status.label}}</option>
            </select>
        </div>

        <div class="input-field">
            <label for=groups>{{$t('tag')}}</label>
            <select v-model="filter.tag" v-on="$listeners">
                <option value="">{{$t('all')}}</option>
                <option v-for="tag in tags" :value="tag.id">{{tag.name}}</option>
            </select>
        </div>

        <div class="input-field">
            <label for=categories>{{$t('group')}}</label>
            <select v-model="filter.group" v-on="$listeners">
                <option value="">{{$t('all')}}</option>
                <option v-for="grp in groups" :value="grp.id">{{grp.name}}</option>
            </select>
        </div>
    </div>
</section>
</template>

<script lang="js">
export default {
    name: 'filter-component',
    props: [
        'filter'
    ],
    model:{
        'prop':'filter',
        'event':'filter'
    },
    mounted() {

    },
    data() {
        return {

        }
    },
    methods: {

    },
    computed: {
        statuses(){
            return this.$store.getters.statuses;
        },
        tags(){
            return this.$store.getters.tags;
        },
        groups(){
            return this.$store.getters.groups;
        },
    }
}
</script>

<style lang="scss" scoped>
.filter-bar {

    .box {
        background-color: white;
        border: solid 1px rgba(46, 91, 255, 0.08);
        margin: 0.5rem;
        padding: 24px;
        max-width: 280px;
        width: 280px;
    }

    h3 {
        font-weight: 300;
        font-size: 15px;
    }

    .input-field {
        margin: 1rem 0;

        label {
            font-weight: 300;
            width: 100%;
            font-size: 15px;
        }

        input,
        select {
            width: 98%;
            height: 40px;
            border-radius: 5px;
            border: solid 1px #e0e7ff;
            color: var(--blue-primary);
            font-size: 15px;
            font-family: Rubik;
            font-weight: 300;
        }
    }
}

.green {
    background-color: var(--weird-green-active);
}
</style>
