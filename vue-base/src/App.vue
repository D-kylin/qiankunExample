<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Base-Home</router-link> |
      <!-- <router-link to="/about">Base-About</router-link> | -->
      <router-link to="/deeplink">Module-Deeplink</router-link>
    </div>
    <router-view />
    <div id="moduleDeeplink"></div>
    <div class="flex">
      <div id="moduleLuck"></div>
      <div id="modulePrize"></div>
    </div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: rgba(237, 200, 241, 0.8);
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
/* .flex {
  display: flex;
  justify-content: space-around;
  flex-flow: row nowrap;
} */
</style>
