<template>
  <nav class="navbar">
    <div class="navbar-container">
      <div class="nav-item">
        <router-link class="navLink" to="/drag-drop">Drag and drop</router-link>
      </div>
      <div class="nav-item">
        <router-link class="navLink" to="/composition">Composition</router-link>
      </div>
      <div class="nav-item">
        <router-link class="navLink" to="/animation">Animation</router-link>
      </div>
      <div class="nav-item">
        <router-link class="navLink" to="/mouse-event">Mouse event</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
.navbar{
  height: 100px;
  background: teal;
}
.navbar-container{
  max-width: 1200px;
  padding: 0 30px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.navLink{
  color: #fff;
  transition: .3s;
  text-decoration: none;
}
.navLink.router-link-exact-active {
  color: #ffb433;
  text-decoration: underline;
}
.navLink:hover{
  color: #ffb433;
}
</style>