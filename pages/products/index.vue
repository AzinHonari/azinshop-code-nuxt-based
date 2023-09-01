<script setup>

    import {getProductByFilter} from '../../modules/product/allProducts'
    import{getColorByQuantity, getAvailabilityByQuantity,getTypeByQuantity, getPriceRange} from '../../modules/product/filters'

    useProductColor().value = getColorByQuantity()
    useProductAvailability().value = getAvailabilityByQuantity()
    useProductType().value = getTypeByQuantity()

    getPriceRange()


</script>

<template>
   <NuxtLayout name="cards">
        <template #header>
            Products
        </template>
        <template #filter>
            <Filter></Filter>
        </template>
        <template #cards>
            <Cards
            :products="getProductByFilter()"
            :source="'showAll'"/>
        </template>
   </NuxtLayout>
</template>