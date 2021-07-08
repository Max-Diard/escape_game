<template>
  <div id="app">
    <header>
      <Timer :time='gameController.timer'/>
      <Craft @onCombine='gameController.combineItems()' @onRemoveItem="removeItemFromInventory" :firstItem='gameController.inventory[0]'  :secondItem='gameController.inventory[1]'/>
    </header>
    <Room :items="gameController.world" @use="useItem" @take="takeItem" />
    <Button :disabled="!gameController.finished" @click="gameController.finish()" icon='https://image.flaticon.com/icons/png/512/4634/4634114.png' type="danger">Sortir</Button>
  </div>
</template>

<script>
import { GameController } from './models/GameController';
import Timer from './components/Timer';
import Craft from './components/Craft.vue';
import Room from './components/Room.vue';
import Button from './components/Button.vue'

export default {
  name: 'App',
  data: function(){
    return {
      gameController: new GameController(this)
    };
  },
  methods :{
    removeItemFromInventory: function (item){
      this.gameController.deleteItemFromInventory(item)
    },
    useItem: function (item){
      this.gameController.useItem(item);
    },
    takeItem: function(item){
      this.gameController.addItemToInventory(item);
    }
  },
  components: {
    Timer, 
    Craft,
    Room,
    Button
  }
}
</script>

<style>

html{
  @apply bg-blue-300;
}

body{
  @apply 
    flex 
    flex-col 
    justify-center 
    items-center;
  width : 100vx;
  height: 100vh;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  @apply w-full max-w-xl bg-blue-300;

}

header{
  @apply
    flex
    justify-between;
}
</style>
