<template>
  <div class="wrapper">
    <canvas ref="canvas" width="1140" height="600"  id="canvas">
    </canvas>
  </div>
</template>

<script>
import {fabric} from 'fabric'

export default {
  mounted() {
    let canvas = new fabric.Canvas('canvas', {
      selection: false,

    })

    let line, isDown
    canvas.on('mouse:down', function (o) {
      isDown = true;
      let pointer = canvas.getPointer(o.e);
      let points = [pointer.x, pointer.y, pointer.x, pointer.y];
      line = new fabric.Line(points, {
        strokeWidth: 3,
        fill: '#ffb433',
        stroke: '#ffb433',
        originX: 'center',
        originY: 'center'
      });
      canvas.add(line);
    })
    canvas.on('mouse:move', function (o) {
      if (!isDown) return;
      let pointer = canvas.getPointer(o.e);
      line.set({
        x2: pointer.x,
        y2: pointer.y
      });
      canvas.renderAll();
    });
    canvas.on('mouse:up', function () {
      isDown = false;
      canvas.remove(line)
    });
  }
}
</script>

<style scoped>
.wrapper {
  padding: 10px ;
  height: 100vh;
  display: flex;
  justify-content: center;
}

#canvas {
  background: teal;
  width: 1200px;
  height: 100%;
}

</style>