<template>
  <div id="app">
    <md-app>
      <md-app-toolbar class="md-primary">
        <md-button class="md-icon-button" to="/connections" v-if="this.$route.name == 'Connection'">
          <md-icon>arrow_back</md-icon>
        </md-button>
        <md-button class="md-icon-button" @click="toggleMenu" v-else>
          <md-icon>menu</md-icon>
        </md-button>
        <h1 class="md-title" style="flex: 1">{{ this.$route.name }}</h1>
        <!-- <md-avatar class="md-avatar-icon md-small">
          <md-icon>person</md-icon>
        </md-avatar> -->
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible">
        <md-toolbar class="md-transparent" md-elevation="0">
          <span class="md-title">Pauwer</span>
        </md-toolbar>
        <md-list>
          <md-list-item to="#">
            <md-icon>camera_alt</md-icon>
            <span class="md-list-item-text">Connect</span>
          </md-list-item>

          <md-list-item to="/">
            <md-icon>dashboard</md-icon>
            <span class="md-list-item-text">Dashboard</span>
          </md-list-item>

          <md-list-item to="/connections">
            <md-icon>list</md-icon>
            <span class="md-list-item-text">Connections</span>
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content>
        <router-view/>
        <md-speed-dial class="md-bottom-right" md-direction="top">
          <md-speed-dial-target>
            <md-icon>flash_on</md-icon>
          </md-speed-dial-target>

          <md-speed-dial-content>
            <md-button class="md-icon-button">
              <md-icon>search</md-icon>
            </md-button>

            <md-button class="md-icon-button">
              <md-icon>camera_alt</md-icon>
            </md-button>
          </md-speed-dial-content>
        </md-speed-dial>
      </md-app-content>
    </md-app>
  </div>
</template>

<script>
export default {
  name: 'Pauwer',
  data: () => ({
    menuVisible: false
  }),
  methods: {
    toggleMenu () {
      this.menuVisible = !this.menuVisible
    }
  }
}
</script>

<style lang="scss">
  .md-app {
    min-height: 100vh;
  }
</style>
