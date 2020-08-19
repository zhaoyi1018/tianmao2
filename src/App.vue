<template>
<div id="app">
  <keep-alive>
      <router-view></router-view>
  </keep-alive>
</div>
</template>


<script>
export default {
};
</script>


<style>
* {
  padding: 0;
  margin: 0;
}

#app {
  overflow: hidden;
}

ul,
li {
  list-style: none;
}

a {
  text-decoration: none;
}
</style>