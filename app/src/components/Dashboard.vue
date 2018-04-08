<template>
  <div>
    <h1>{{ title }}</h1>
    <p v-if="!loggedIn">You are not logged in.</p>
    <md-button class="md-raised" v-bind:class="{ 'md-primary': !loggedIn, '': loggedIn }" v-on:click="logIn" v-if="!loggedIn">Log in</md-button>
  </div>
</template>

<script>
export default {
  methods: {
    logIn: function () {
      var vm = this
      vm.loggedIn = true
      this.title = 'Dries Van Bever'
    }
  },
  data () {
    return {
      loggedIn: false,
      pid: '72324',
      name: 'Dries Van Bever',
      title: 'Welcome',
      subtitle: 'You are not logged in.',
      responseMsg: null
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
