<script setup>
    const show = ref(false)

    const chnage = () => {
        show.value = !show.value
    }
</script>

<template>
    <nav>
        <HeaderMobileNavbar  
        :showMenu="show" @toggle = "chnage"></HeaderMobileNavbar>
        <HeaderMobileNavbody 
        :showMenu="show" @toggle = "chnage"></HeaderMobileNavbody>
    </nav>
</template>

<style scoped>

    nav{
        display: none;
        width: calc(50% + 2rem);
    }

    @media only screen and (max-width: 800px)  {
        nav{
            display: flex;
        }
    }
</style>
