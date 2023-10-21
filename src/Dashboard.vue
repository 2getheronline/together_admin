<template>
<v-app>
<v-sheet
    class="overflow-hidden"
    style="margin-top: 56px; width:100%"
  >
<Header/>
    <v-container class="fill-height pt-5 content">
     <router-view></router-view>
    </v-container>
<Sidebar/>
  </v-sheet>
  <link href="https://cdn.jsdelivr.net/npm/@mdi/font@6.x/css/materialdesignicons.min.css" rel="stylesheet">

</v-app>
</template>

<script>
import Header from './components/Main/Header'
import Sidebar from './components/Main/Sidebar'
export default {
  name: 'Dashboard',

  components: {
    Header,
    Sidebar
  },

  data () {
      return {
        drawer: null,
        items: [
          { title: 'Home', icon: 'mdi-view-dashboard' },
          { title: 'About', icon: 'mdi-forum' },
        ],
      }
    },
};
</script>

<style>
  .router {
    margin-left: 80px;
  }
  .content {
    background-color: #f4f6fc;
    width: 100%;
  }

  .container > section {
    width:100%
  }
</style>

