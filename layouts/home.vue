<script setup>
    import {MenuDirection} from '@/rules'
</script>
<template>

<div class="wrapper">
        <div class="header-wrapper">
            <Header
                :direction = "MenuDirection.HORIZONTAL"
            ></Header>
        </div>
        

        <div class="main">
            <slot></slot>
        </div>

        <div class="footer-wrapper">
            <Footer
            :direction = "MenuDirection.VERTICAL"
        ></Footer>
        </div>

        
    </div>
    
</template>

<style scoped>
    .wrapper{
        position: relative;
        width: 100%;
        overflow: hidden;
        
        /* background-color: white; */
        
        
    }

    .wrapper .main{
        max-width: 100%;
        margin-top: 4rem;
        /* background-color: white; */
        
    }
</style>