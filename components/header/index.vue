<script setup>
    const props = defineProps({
        direction:String
    })

</script>

<template>
    <header class="header">
        <div class="wrapper">
            <HeaderWeb  :direction="direction"></HeaderWeb>
            <HeaderMobile></HeaderMobile>
            <HeaderSharedUtilitey v-show="direction"></HeaderSharedUtilitey>
        </div>
    </header>
</template>

<style scoped>
    .header{
        box-sizing: border-box;
        grid-column: 1;
        border-bottom: solid 0.0625rem var(--gray100);
        padding: 1rem 0;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 10;
        background-color: white;
    }

    .header .wrapper{
        box-sizing: border-box;
        position: relative;
        width: 75rem;
        margin: 0 auto;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items:center;
        color: var(--gray200);
    }

    @media only screen and (max-width: 1200px)  {
        .header .wrapper{
            width: 100%;
            padding: 0 2rem;
        }


    }



</style>