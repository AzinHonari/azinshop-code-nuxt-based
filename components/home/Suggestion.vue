<script setup>

    const props = defineProps(["products"])
    
</script>
<template>
    <div class="suggestion-container">
        <NuxtLayout name="cards">
            <template #header>
                <div class="header-container">
                    <h2>Obsessive Attention. Intelligent Effort.</h2>
                    <p>Drawing handbags made of lines and pixels to improve people's visions in small but mighty ways.</p>
                </div>
            </template>

            <template #cards>
                <Cards
                :products="products"
                :source="'suggestion'"/>
            </template>
    </NuxtLayout>
    </div>
</template>

<style scoped>

.suggestion-container{
    box-sizing: border-box;
    width: 75rem;
    margin: 0 auto;
    background-color: white;
    }

.header-container{
    text-align: center;
}


.header-container p{
    font-size: 1.125rem;
    line-height: 3rem;
    color: var(--gray200);
    font-weight: 300;
    
} 

@media only screen and (max-width: 1200px)  {
    .suggestion-container{
        width: 100%;
        padding: 0 2rem;
    }
}

@media only screen and (max-width: 800px)  {
    .header-container p{
        line-height: 1.75rem;
       margin-top: 1rem;
        
    }

}


</style>
modules/data