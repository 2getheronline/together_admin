<template lang="html">

  <section class="summary">
    <v-card class="pa-5">
      <v-card-subtitle>{{$t(title)}}</v-card-subtitle>
      <v-card-title class="headline">{{count}}</v-card-title>

    </v-card>
  </section>

</template>

<script lang="js">
  export default  {
    name: 'summary-component',
    props: [
        'count',
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

<style scoped lang="scss">
  .summary {

  }
</style>
