<template>
  <div class="pauwer-app socket-page">
    <h1>Socket</h1>
    <p class="md-caption">ID {{ sid }}</p>
    <!-- <p>{{ socketActive ? 'Stop' : 'Start' }} using this socket.</p> -->
    <md-button class="md-raised md-elevation-6" v-bind:class="{ 'md-primary': !socketActive, 'md-accent': socketActive }" v-on:click="toggleSocket">{{ socketActive ? 'Stop' : 'Start' }}</md-button>
    <p>{{ responseMsg }}</p>
  </div>
</template>

<script>
export default {
  name: 'Socket',
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
.md-button{
  width: 300px;
  height: 50px;
  font-size: 1.2em;
}
h1, h2 {
  font-weight: normal;
  text-align: cernter;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
