<template>
  <div id="app">
    <HeaderMenu />
    <router-view />
  </div>
</template>
<script>
import HeaderMenu from "@/components/HeaderMenu";

export default {
  name: "HomeView",
  components: {
    HeaderMenu,
  },
};
</script>
<style lang="scss">
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
