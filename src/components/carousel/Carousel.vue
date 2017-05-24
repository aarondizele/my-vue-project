<template>

<div class="carousel">
    <slot></slot>
    
    <button class="carousel__nav carousel__prev" @click.prevent="prev">Prev</button>

    <button class="carousel__nav carousel__next" @click.prevent="next">Next</button>


</div>

</template>

<script>

export default{
    data(){
        return{
            index: 0,
            slides: []
        }
    },
    mounted () {
        this.slides = this.$children // store in slide number of children
        this.slides.forEach( (slide, i) => {
            slide.index = i
        })
    },
    methods  : {
        next () {
            this.index++
        },
        prev () {
            this.index--
        }
    }
}

</script>

<style>

</style>

