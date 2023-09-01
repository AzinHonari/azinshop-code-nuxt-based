<script setup>
    const props = defineProps(["showMenu"])
    const emits = defineEmits(["toggle"])


    const toggleIt = () =>{
        emits("toggle")
    }


</script>

<template>
    <div class="container">
        <span 
            class=" hamburger" 
            :class="showMenu ? 'icon-close' : 'icon-menu' "
            @click="toggleIt"></span>
        <HeaderSharedLogo></HeaderSharedLogo>
    </div>
</template>

<style scoped>
    .container{
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    .hamburger{
        display: block;
        width: 2rem;
        height: 2rem;
        line-height: 2rem;
        text-align: center;
        font-size: 1.6875rem;
        cursor: pointer;
    }



</style>