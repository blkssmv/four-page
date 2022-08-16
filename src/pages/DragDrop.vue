<template>
  <div class="wrapper">
    <h1>Sort the countries by their area</h1>
    <div class="row">
      <div class="column">

        <h3>Countries</h3>
        <draggable class="list-group" :list="items" group="items">
          <div class="list-group-item" v-for="item in items" :key="item.id">
            {{ item.title }}
          </div>
        </draggable>

      </div>

      <div class="column">
        <h3>Answers</h3>
        <draggable class="list-group" :list="answers" group="items">
          <div ref="answer" class="list-group-answer" v-for="item in answers" :key="item.id">
            {{ item.title }}
          </div>
        </draggable>

      </div>


    </div>
    <div class="btn">
      <button @click="check">
        Check
      </button>
    </div>
  </div>
</template>

<script>


import {VueDraggableNext} from "vue-draggable-next"

export default {
  components: {
    draggable: VueDraggableNext
  },
  data() {
    return {
      items: [
        {id: 3, title: 'Norway'},
        {id: 1, title: 'Spain'},
        {id: 0, title: 'France'},
        {id: 2, title: 'Sweden'},
      ],
      answers: []
    }
  },
  methods: {
    check: function(){
      if(this.answers.length === 4){
        for(let i=0;i<this.answers.length;i++){
          if(this.answers[i].id === i){
            this.$refs.answer[i].classList.add('correct')
          }
          else{
            this.$refs.answer[i].classList.add('incorrect')
          }
        }
      }
      else{
        alert('Sort all countries')
      }

    }
  }

}
</script>

<style scoped>
.wrapper {
  text-align: center;
  max-width: 768px;
  height: 100vh;
  margin: 0 auto;
  padding: 15px;
}

h1 {
  margin-bottom: 30px;
}

h3 {
  margin-bottom: 20px;
}

.row {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.column {
  display: flex;
  flex-direction: column;
  padding: 0 30px;
  height: 400px;
  width: 100%;
  text-align: center;
  margin-bottom: 20px;
}

.list-group {
  width: 100%;
  height: 100%;

}

.list-group-item {
  width: 100%;
  border: 1px solid #000000;
  padding: 30px;
  margin-bottom: 10px;
  cursor: pointer;
}

.list-group-answer {
  width: 100%;
  border: 1px dashed #000000;
  padding: 30px;
  margin-bottom: 10px;
  cursor: pointer;
}

.list-group-item:last-child {
  margin-bottom: 0;
}
.btn button{
  height: 35px;
  width: 100px;
  font-size: 15px;
  background: teal;
  cursor: pointer;
  border: none;
  color: #ffffff;
  border-radius: 7px;
  transition: .3s;
}
.btn button:hover{
  background: #03d0d0;
}
.correct{
  border: 1px solid forestgreen;
}
.incorrect{
  border: 1px solid red;
}

</style>