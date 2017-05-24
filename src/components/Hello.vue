<template>
  <div class="hello">
    <div class="container">
      <h1>{{ msg }}</h1>
      <h2>Essential Links</h2>

      <!--<a :href="link">Go to</a>

      <!-- <button class="btn btn-danger" @click="success = !success">Close / Open</button>
      <input type="checkbox" v-model="success">

      <!-- <div class="alert alert-success" v-if="success">
      <div class="alert" :class="success ? 'alert-success':'alert-danger'">
        <p v-if="success">Show me the way</p>
        <p v-else="!success">Hide me the way</p>
      </div>
      <div>
        <input type="text" v-model="myInputPerson">
      </div>
      <div><p class="render" v-for="person in persons">{{person.name}}</p></div>

      <!-- <div class="alert alert-danger" v-else="!success">
        <p>How me</p>
      </div>
      <div class="jumbotron">
        <p>Modify name: <input type="text" v-model="fullname"></p>
        <p>First name : {{fname}}</p>
        <p>Last name : {{lname}}</p><br>
        
        <!-- <input type="text" v-model.trim="msg2"> --><!-- remove whitespace left and right -->
        <!-- <input type="text" v-model.trim="msg2"> 
        <input type="text" v-model.lazy="msg2">
        <!-- <input type="text" @keyup.space="msg2">
        <p>{{msg2 | reverse}}</p>
      </div>-->
    <!--  <app-classic isClass="alert alert-danger" :message="msg"></app-classic> -->
    <div class="jumbotron alert alert-success" v-if="alert">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam quos sapiente, nobis unde repellat exercitationem impedit non iusto. Vel quis aperiam odio libero laborum est veniam nemo ad id quos.</p>
      <app-classic isClass="glyphicon glyphicon-remove" @close="hideAlert"></app-classic>
    </div>
    <button class="btn btn-info" @click="showAlert" v-if="!alert">Show alert</button><br>

     <!-- <app-classic isClass="glyphicon glyphicon-remove" :message="msg" @close="hideAlert"></app-classic> DEfault -->
    <!-- <counter></counter> -->
     <notifications></notifications>
     <ontransition></ontransition>
    </div>
  </div>
</template>

<script>

import Classic from './Classic'
import Notifications from './Notifications'


export default {
  components : {Classic, Notifications},
  name: 'hello',
  data: function () {
    return {
      msg: 'Welcome to Your Vue.js App',
      msg2: '',
      link: 'https://google.com',
      success: true,
      text: 'Works',
      myInputPerson: '',
      fname: 'Jean',
      lname: 'Delatour',

      alert: false,

      persons: [{
        name: 'Charles Max'
      }, {
        name: 'Nicolas Tesla'
      }, {
        name: 'Allen Turin'
      }, {
        name: 'Albert Einsten'
      }]
    }
  },
  methods: {
    showAlert(){
      this.alert = true
    },
    hideAlert(){
      this.alert = false
    }
  },
  computed: {
    fullname: {
      get: function(){
        return this.fname + ' ' + this.lname
      },
      set: function(value){
        let parts = value.split(' ')
        this.fname = parts[0]
        this.lname = parts[1]
      }
    }
  },
  filters: {
    reverse: function(value){
      return value.split('').reverse().join('')
    }
  }
}



</script scoped>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
p.render {
  display: block;
  background: #FFF;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, .28);
  margin: 5px 0;
}
.remover{
  color: red;
}
</style>
