<template>
    <div class="container">
        <div class="header-container">
            <slot name="header"></slot>
        </div>
        <div class="filter-container">
            <slot name="filter"></slot>
        </div>
        <slot name="cards">cards</slot>
    </div>
</template>



<style scoped>
.container {
    width: 100%;
}

.header-container{
    width: 100%;
    font-size: 2.25rem;
    line-height: 4rem;
    font-weight: 400;
    margin: 2rem 0;
}

@media only screen and (max-width: 800px)  {
    .header-container{
        font-size: 1.75rem;
        line-height: 2.5rem;
    }

}


</style>
