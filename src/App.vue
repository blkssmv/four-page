<template>
  <NavBar/>
  <div class="app-container">
    <router-view/>
  </div>

</template>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 30px;
}


</style>
<script>
import NavBar from "@/components/NavBar";
export default {
  components: {NavBar}
}
</script>