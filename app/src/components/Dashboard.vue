<template>
  <div>
    <h1>{{ title }}</h1>
    <p v-if="!loggedIn">You are not logged in.</p>
    <md-button class="md-raised" v-bind:class="{ 'md-primary': !loggedIn, '': loggedIn }" v-on:click="logIn" v-if="!loggedIn">Log in</md-button>

    <md-card v-if="loggedIn" md-with-hover>
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">2 active sockets</div>
          <div class="md-subhead">Energy consumption</div>
        </md-card-header-text>

        <md-card-media>
          <md-icon class="md-primary md-size-3x">flash_on</md-icon>
        </md-card-media>
      </md-card-header>

      <md-card-actions>
          <md-button to="/connections">View connections</md-button>
        </md-card-actions>
    </md-card>
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
