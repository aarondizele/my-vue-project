<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">
    <hello></hello> -->
    <app-user></app-user>
    <!-- <carousel>
      <carouslide class="d-inline">
        Hello world!
      </carouslide>
      <carouslide class="d-inline ml-4">
        Good bye world!
      </carouslide>
    </carousel> -->
  </div>
</template>

<script>
import Hello from './components/Hello'


export default {
  name: 'app',
  components: {
    Hello
  }
}
</script>

<style>
#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #444;
  margin-top: 60px;
  font-size: 18px;
}
input{
  border: 1px solid #ccc;
  border-radius: 4px;
  color: #444;
  padding: 8px 14px;
  font-size: 1rem;
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  outline-color: #3498db;
}
button.btn{
  outline: none;
}
</style>
