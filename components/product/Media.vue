<script setup>
    const {images} = defineProps(['images'])

</script>

<template>
    <div class="images">
        <div class="preview">
            <img :src="`../../${usePreviewImage().value}`">
        </div>

        <div class="image" v-for="img in images">
            <img :src="`../../${img.url}`">
        </div>

    </div>
</template>

<style scoped>
    .images{
        display: grid;
        grid-template-columns: repeat(2, calc(50% - 0.25rem));
        justify-content: space-between;
    }

    .images > *{
        margin-bottom: 0.5rem;
    }
    img{
        max-width: 100%;
        min-width: 50%;
    }

    .preview{
        grid-column: 1 / 3;
    }

    @media only screen and (max-width: 800px)  {  
        .images{
            max-width: 100%;
            grid-template-columns: repeat(4, calc(25% - 0.125rem));
            grid-template-rows: repeat(2, 1fr);
            overflow-x: hidden;
        }

        .images > *{
            margin-bottom: 0.125rem;
        }
        img{
            max-width: 100%;
            min-width: 50%;
        }

        .preview{
            grid-column: 1 / 3;
            grid-row: 1 / 3;
        }

        .image:nth-child(2) , .image:nth-child(n+7):nth-child(-n+15){
            display: none;
        }
    }

</style>