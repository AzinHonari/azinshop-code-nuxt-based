<script setup>

    import {MenuDirection} from '@/rules'

    const props = defineProps({
        direction: String
    })

    const activeMenu = ref("")

</script>

<template>
     <nav>  
        <HeaderSharedLogo  
            v-show="direction === MenuDirection.HORIZONTAL"
            @click="activeMenu ='logo'"
            style="margin-right: 2rem;"
        ></HeaderSharedLogo>
        
        <HeaderWebNav :direction="direction"></HeaderWebNav>
    </nav>
</template>


<style scoped>
  nav{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        position: relative;
    }

    @media only screen and (max-width: 800px)  {
        nav{
            display: none;
        }
    }

</style>