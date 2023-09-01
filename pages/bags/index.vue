<script setup>

    import { Category } from '@/data';
    import { getProductByFilter } from '../../modules/product/allProducts';
    import{getColorByQuantity, getAvailabilityByQuantity} from '../../modules/product/filters'
    
    useProductColor().value = getColorByQuantity(Category.BAGS)
    useProductAvailability().value = getAvailabilityByQuantity(Category.BAGS)

</script>

<template>
   <NuxtLayout name="cards">
        <template #header>
            Bags
        </template>
        <template #filter>
            <Filter></Filter>
        </template>
        <template #cards>
            <Cards
            :products="getProductByFilter(Category.BAGS)"
            :source="'showAll'"/>
        </template>
   </NuxtLayout>
</template>modules/data