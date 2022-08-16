<template>
  <div class="wrapper">
    <div class="buttons">
      <button @click="toggleActiveRotate" :class="[isActiveRotate ? activeClass : '']">Rotate</button>
      <button @click="toggleActiveUpAndDown" :class="[isActiveUpAndDown ? activeClass : '']">Up and Down</button>
    </div>
    <div class="block-content">
      <div :class="[isActiveRotate ? rotating : '' || isActiveUpAndDown ? upAndDown : '']" class="block "></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActiveRotate: false,
      isActiveUpAndDown: false,
      activeClass: 'active',
      rotating: 'rotate',
      upAndDown: 'up-down'
    }
  },
  methods: {
    toggleActiveRotate() {
      this.isActiveRotate = !this.isActiveRotate
      if (this.isActiveUpAndDown) {
        this.isActiveUpAndDown = false
      }

    },
    toggleActiveUpAndDown() {
      this.isActiveUpAndDown = !this.isActiveUpAndDown
      if (this.isActiveRotate) {
        this.isActiveRotate = false
      }
    }
  }
}
</script>

<style scoped>
.wrapper {
  padding: 30px;
  width: 100%;
  display: flex;
  flex-direction: column;
}

.buttons {
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 20px;
  margin: 25px 0;
}

.block-content .rotate {
  -webkit-animation: rotation 3s infinite linear;
}

@-webkit-keyframes rotation {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(359deg);
  }
}

.buttons .active {
  background: #ffb433;
}

.buttons button {
  display: flex;
  width: 100%;
  height: 50px;
  align-items: center;
  justify-content: center;
  background: teal;
  border: none;
  cursor: pointer;
  color: #ffffff;
}

.block-content {
  height: 500px;
  align-items: center;
  width: 100%;
  display: flex;
  justify-content: center;
}

.block {
  width: 200px;
  height: 200px;
  background: #ffb433;
  border-radius: 20px;
}
.up-down{
  -webkit-animation: up-down 1s infinite  alternate;
  animation: up-down 1s infinite  alternate;
}
@-webkit-keyframes up-down {
  0% { transform: translateY(100px); }
  100% { transform: translateY(-100px); }
}
@keyframes up-down {
  0% { transform: translateY(100px); }
  100% { transform: translateY(-100px); }
}
</style>