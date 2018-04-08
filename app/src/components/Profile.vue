<template>
  <div>
    <h1>Welcome</h1>
    <p>{{ subtitle }}</p>
    <md-button class="md-raised" v-bind:class="{ 'md-primary': !loggedIn, '': loggedIn }" v-on:click="authAction">{{ loggedIn ? 'Log out' : 'Log in' }}</md-button>
  </div>
</template>

<script>
export default {
  methods: {
    authAction: function () {
      this.loggedIn ? this.logOut() : this.logIn()
    },
    logIn: function () {
      var vm = this
      vm.loggedIn = true
      this.subtitle = this.name
    },
    logOut: function () {
      var vm = this
      vm.loggedIn = false
      this.subtitle = 'You are not logged in.'
    }
  },
  data () {
    return {
      loggedIn: false,
      pid: '72324',
      name: 'Dries Van Bever',
      subtitle: 'You are not logged in.',
      responseMsg: null
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
