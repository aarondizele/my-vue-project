<template>
    <div class="notifications">
        <p>{{message}}</p>
    </div>

</template>

<script>

export default{
    name: 'notifications',
    data: function(){
        return{
            message: 'Notifications works!'
        }
    }


}

</script>

<style scoped>

.notifications{
    font-size: 32px;
}

</style>

