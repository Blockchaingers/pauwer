<template>
  <div>
    <h1 v-if="sid == '275328964'">Home lights <span class="md-caption">{{ sid }}</span></h1>
    <h1 v-else>Socket <span class="md-caption">{{ sid }}</span></h1>
    <p>{{ activityMsg }}</p>
    <md-button class="md-raised" v-bind:class="{ 'md-primary': !socketActive, 'md-accent': socketActive }" v-on:click="toggleSocket">{{ socketActive ? 'Stop' : 'Start' }}</md-button>
    <p>{{ responseMsg }}</p>
    <p class="md-body-2" v-if="consumption > 0">Consumed {{ consumption }} Wh at €0.31/kWh for a total of €{{ Math.round(consumption * 0.31) * 0.001 }}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      sid: this.$route.params.sid,
      socketActive: null,
      activityMsg: null,
      responseMsg: null,
      eventTime: null,
      consumption: null
    }
  },
  methods: {
    getSocketState: function () {
      var vm = this
      fetch('//localhost:3000/api/' + this.sid + '/1234/getState')
        .then(function (response) {
          return response.json()
        })
        .then(function (result) {
          vm.socketActive = result[2]
          vm.activityMsg = 'You are ' + (result[2] ? '' : 'not') + ' currently using this socket.'
          vm.eventTime = result[2] ? new Date(result[1] * 1000) : ''
          vm.consumption = result[0]
          return result
        })
    },
    toggleSocket: function (e) {
      var vm = this
      var action = this.socketActive ? 'stop' : 'start'
      fetch('//localhost:3000/api/' + this.sid + '/1234/' + action)
        .then(function (response) {
          console.log(response)
          return response.json()
        })
        .then(function (json) {
          fetch('http://sonoff/cm?cmnd=Power%20TOGGLE')
          vm.getSocketState()
          vm.responseMsg = JSON.parse(json).message + vm.eventTime
        })
        .catch(function (error) {
          vm.responseMsg = 'This socket is not reachable'
          console.log(error)
        })
    }
  },
  created () {
    this.getSocketState()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
