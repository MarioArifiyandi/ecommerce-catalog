<!-- src/App.vue -->
<template>
  <div id="app">
    <router-link class="a" to="/men-clothing" exact>Men's Clothing</router-link>
    <router-link class="b" to="/women-clothing" exact>Women's Clothing</router-link>
    <router-view />
  </div>
</template>

<style>
#app {
  text-align: center;
  margin-top: 60px;
}

#app .a,
#app .b {
  font-weight: bold;
  text-decoration: none;
  margin-right: 20px;
  padding: 5px;
  border-radius: 4px;
}

#app .a {
  color: #002772;
  border: 3px solid #002772;
}

#app .b {
  color: #720060;
  border: 3px solid #720060;
}

#app .a:hover {
  background-color: #002772;
  color: #fff;
}

#app .b:hover {
  background-color: #720060;
  color: #fff;
}

#app .a.router-link-exact-active {
  background-color: #002772;
  color: #fff;
}
#app .b.router-link-exact-active {
  background-color: #720060;
  color: #fff;
}
</style>
