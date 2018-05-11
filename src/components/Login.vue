<template>
  <div class="login-page">
    <form action="" class="login-form">
      <div class="form-group">
        <label for="username">Username:</label>
        <input name="username" id="username" type="text">
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input name="password" id="password" type="password">
      </div>
      <div class="form-group center">
        <button @click="login">Login</button>
      </div>
    </form>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';

  export default {
    name: 'Login',
    computed: {
      ...mapGetters([
        'loading',
      ])
    },
    methods: {
      login() {
        this.$store.dispatch("login").then(() => {
          this.$router.push({path: '/root'});
        });
      }
    }
  };
</script>

<style lang="scss" scoped>
  .login-page {
    margin-top: 80px;
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    .login-form {
      width: 400px;
      border: 1px solid #8f8f8f;
      border-radius: 4px 4px 4px 4px;
      padding: 58px 28px 28px 28px;
      -webkit-box-shadow: 2px 2px 2px 2px #797979;
      box-shadow: 2px 2px 2px 2px #797979;
    }
  }

</style>
