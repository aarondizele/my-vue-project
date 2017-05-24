<template>

    <div class="classic">

       <!-- <p :class="isClass">{{message}}</p> -->

        <span class="glyphicon glyphicon-remove" aria-hidden="true" @click="close" style="cursor:pointer; color: red"></span>
        <!-- <slot></slot> --> <!-- show data inside exported element -->
    </div>

</template>


<script>

export default{
    name: 'app-classic',
    data: function() {
        return {
            toWelcome: 'Classic success'
        }
    },
    props: {
        isClass: {default: 'alert alert-success'},
        message: String
     },
     methods: {
         close(){
            //  return this.$parent.$data.alert = false;
            this.$emit('close')
         }
     }
}

</script>

<style scoped>
    p{
        font-size: 22px;
    }

</style>