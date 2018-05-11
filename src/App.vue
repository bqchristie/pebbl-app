<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <header v-if="isLoggedIn"><button @click="logout()">logout </button></header>
    <div class="main">
      <router-view/>
    </div>
    <p>!!{{isLoggedIn}}!!</p>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';
  export default {
    name: 'App',
    computed: {
      ...mapGetters([
        'isLoggedIn',
      ])
    },
    methods: {
      logout() {
        this.$store.dispatch("logout").then(() => {
          this.$router.push({path: '/'});
        });
      }
    }
  };
</script>

<style lang="scss">
  @import 'src/assets/styles/reset.scss';
  @import 'src/assets/styles/main.scss';


</style>
