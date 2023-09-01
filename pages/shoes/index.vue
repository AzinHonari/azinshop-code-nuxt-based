<script setup>

    import { Category } from '@/data';
    import { getProductByFilter } from '../../modules/product/allProducts';
    import{getColorByQuantity,getAvailabilityByQuantity} from '../../modules/product/filters'

    useProductColor().value = getColorByQuantity(Category.SHOES)
    useProductAvailability().value = getAvailabilityByQuantity(Category.SHOES) 

</script>

<template>
   <NuxtLayout name="cards">
        <template #header>
            Shoes
        </template>
        <template #filter>
            <Filter></Filter>
        </template>
        <template #cards>
            <Cards
            :products="getProductByFilter(Category.SHOES)"
            :source="'showAll'"/>
        </template>
   </NuxtLayout>
</template>modules/data