<template>
  <md-list>
    <md-list-item v-for="socket in sockets" v-bind:key="socket.id" v-bind:class="{ 'md-inset' : !socket.state }" :to="{ name: 'Connection', params: { 'sid' : socket.id } }">
      <md-icon class="md-primary" v-if="socket.state">flash_on</md-icon>
      <div class="md-list-item-text">
        <span>{{ socket.alias }}</span>
        <span class="md-caption">{{ socket.id }}</span>
      </div>
    </md-list-item>
  </md-list>
</template>

<script>
export default {
  data () {
    return {
      sockets: [
        {
          alias: 'Home lights',
          id: '275328964',
          state: null
        },
        {
          alias: 'eCar charging pole',
          id: '1216563',
          state: null
        },
        {
          alias: null,
          id: '247924769',
          state: null
        },
        {
          alias: 'Camper',
          id: '2380972784',
          state: null
        },
        {
          alias: 'AirBnB',
          id: '24907782039',
          state: null
        }
      ]
    }
  },
  methods: {
    getSocketStates: function (array) {
      var vm = this
      var i = 0
      for (let socket in array) {
        fetch('//localhost:3000/api/' + array[socket].id + '/1234/getState')
          .then(function (response) {
            return response.json()
          })
          .catch(function (error) {
            vm.responseMsg = 'This socket is not reachable'
            console.log(error)
          })
          .then(function (result) {
            vm.sockets[i].state = result[2]
            i += i
            return result[2]
          })
          .catch(function (error) {
            vm.responseMsg = 'This socket is not reachable'
            console.log(error)
          })
      }
    }
  },
  created () {
    this.getSocketStates(this.sockets)
  }
}
</script>

<style scoped>
</style>
