<script setup>
    const props = defineProps({
        direction: String
    })

</script>
<template>
    <footer class="footer">
            <FooterContentTop 
            :direction = "direction"
            />
            <FooterContentBottom/>
    </footer>
</template>

<style scoped>
    .footer{
        box-sizing: border-box;
        grid-column: 1;
        padding: 1rem 0;

        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        color: var(--gray200);
        background-color: white;

    }

    @media only screen and (max-width: 1200px)  {
        .footer{

        width: 100%;
        padding: 0 2rem;
    }
}

</style>