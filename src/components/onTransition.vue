<template>

<div>
    <transition name="fade" appear mode="out-in">
    <!-- <transition :css="false" @enter="enter" @leave="leave" mode="out-in"> -->
        <div class="jumbotron" v-if="visible" key="visible">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque deserunt assumenda, libero distinctio excepturi recusandae eos, culpa et pariatur consequatur amet velit sunt ipsum facere rem cum illum veniam, corrupti.
        </div>
        <div class="jumbotron alert-info" v-else key="unvisible">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi aperiam commodi facere quam veritatis nulla, enim soluta placeat ab non voluptatem alias hic qui tempore, aspernatur quod explicabo eos molestiae.</div>
    </transition>
    <button class="btn" @click="toggle">Toggle</button>

    <transition-group name="fade" tag="ul">
        <li v-for="(item, i) in items" :key="item">
        {{item}} <span  @click="remove(i)" class="glyphicon glyphicon-remove" style="color: red; padding-left=50px; cursor: pointer"></span>
        </li>    
    </transition-group>
   <input type="number" v-model="added"> 
   <button class="btn" @click="add(added)">Add</button>

</div>

</template>

<script>

let slides = {
    methods: {
        enter: (el, done) => {
            $(el).hide().slideDown(90, done)
        },
        leave: (el, done) => {
            $(el).show().slideUp(90, done)
        }
    }
}

export default{
    mixins: [slides],
    data(){
        return{
            visible: true,
            items: [1,2,4,5,6,7,8,9,3],
            added: ''
        }
    },
    methods: {
        toggle(){
            this.visible = !this.visible
        },
        add(i){
            this.items.push(i)
        },
        remove(i){
            this.items.splice(i, 1)
        }
    }

}
</script>

<style scoped>

.fade-enter-active, .fade-leave-active{
    transition: opacity 1s, transform 1s;
}
.fade-enter, .fade-leave-active{
    opacity: 0;
    transform: translateX(20px);
}


</style>

