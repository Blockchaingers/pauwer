<template>
  <div class="">
    <h1>Socket {{ sid }}</h1>
    <p class="md-caption">{{ sid }}</p>
    <!-- <p>{{ socketActive ? 'Stop' : 'Start' }} using this socket.</p> -->
    <md-button class="md-raised md-elevation-6" v-bind:class="{ 'md-primary': !socketActive, 'md-accent': socketActive }" v-on:click="toggleSocket">{{ socketActive ? 'Stop' : 'Start' }}</md-button>
    <p>{{ responseMsg }}</p>
  </div>
</template>

<script>
export default {
  methods: {
    toggleSocket: function (e) {
      var vm = this
      var action = this.socketActive ? 'stop' : 'start'
      fetch('//localhost:3000/api/' + this.sid + '/1234/' + action)
        .then(function (response) {
          return response.json()
        })
        .then(function (json) {
          vm.responseMsg = JSON.parse(json).message + ' at socket ' + JSON.parse(json).socketId
          vm.socketActive = !vm.socketActive
        })
        .catch(function (error) {
          vm.responseMsg = 'This socket is not reachable'
          console.log(error)
        })
    }
  },
  data () {
    return {
      sid: this.$route.params.sid,
      socketActive: false,
      responseMsg: null
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
