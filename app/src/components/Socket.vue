<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>Socket ID {{ sid }}</p>
    <button v-on:click="start">Start</button>
  </div>
</template>

<script>
export default {
  name: 'Socket',
  methods: {
    start: function (e) {
      fetch('//localhost:3000/api/' + this.sid + '/1234/start')
        .then(function (response) {
          return response.json()
        })
        .then(function (json) {
          alert(JSON.parse(json).message)
        })
    }
  },
  data () {
    return {
      msg: 'Connect',
      sid: this.$route.params.sid
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
