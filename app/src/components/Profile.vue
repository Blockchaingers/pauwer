<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>Profile name</p>
    <p>Profile ID 72324</p>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  data () {
    return {
      msg: 'Profile'
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
