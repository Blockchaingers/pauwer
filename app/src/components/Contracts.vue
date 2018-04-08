<template>
  <md-list>

    <md-list-item v-bind:class="{ 'md-inset' : !socketActive }" to="/connections/275328964">
      <md-icon class="md-primary" v-if="socketActive">flash_on</md-icon>
      <div class="md-list-item-text">
        <span>Home</span>
        <span class="md-caption">275328964</span>
      </div>
    </md-list-item>

    <md-list-item to="/connections/1216563">
      <md-icon class="md-primary">flash_on</md-icon>
      <div class="md-list-item-text">
        <span>eCar charging pole</span>
        <span class="md-caption">1216563</span>
      </div>
    </md-list-item>

    <md-list-item to="/connections/a2yu39a">
      <md-icon class="md-primary">flash_on</md-icon>
      <div class="md-list-item-text">
        <span>Socket a2yu39a</span>
      </div>
    </md-list-item>

    <md-list-item class="md-inset" to="/connections/3894a740a0">
      <div class="md-list-item-text">
        <span>Camper</span>
        <span class="md-caption">3894a740a0</span>
      </div>
    </md-list-item>

    <md-list-item class="md-inset" to="/connections/33789fyh73b">
      <div class="md-list-item-text">
        <span>AirBnB</span>
        <span class="md-caption">33789fyh73b</span>
      </div>
    </md-list-item>
  </md-list>
</template>

<script>
export default {
  data () {
    return {
      socketActive: null
    }
  },
  methods: {
    getSocketState: function (sid) {
      var vm = this
      fetch('//localhost:3000/api/' + sid + '/1234/getState')
        .then(function (response) {
          return response.json()
        })
        .then(function (result) {
          vm.socketActive = result[2]
          return result[2]
        })
    }
  },
  created () {
    this.getSocketState('275328964')
  }
}
</script>

<style scoped>
</style>
