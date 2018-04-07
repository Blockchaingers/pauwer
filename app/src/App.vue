<template>
  <div id="app">
    <header>
      <span class="app-name">Pauwer</span>
      <nav class="app-nav">
        <ul>
          <li><router-link to="/">Dashboard</router-link></li>
          <li><router-link to="profile">Profile</router-link></li>
        </ul>
      </nav>
    </header>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'Pauwer'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
