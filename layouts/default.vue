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
        box-sizing: border-box;
        position: relative;
        width: 100%;
        overflow: hidden;
    }

    .wrapper .main{
        box-sizing: border-box;
        width: 75rem;
        margin: 0 auto;
        padding: 3rem 0;
    }

    @media only screen and (max-width: 1200px)  {
        .wrapper .main{
        width: 100%;
        padding: 3rem 2rem;
    }
}
</style>