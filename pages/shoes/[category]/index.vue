<script setup>

    import { Category } from '@/data';
    import { getProductByFilter } from '../../../modules/product/allProducts';
    import{getColorByQuantity, getAvailabilityByQuantity} from '../../../modules/product/filters'

    const route= useRoute()
   
    useProductColor().value = getColorByQuantity(Category.SHOES,route.params.category) 
    useProductAvailability().value = getAvailabilityByQuantity(Category.SHOES,route.params.category)   

</script>

<template>
   <NuxtLayout name="cards">
        <template #header>
            {{ route.params.category }}
        </template>
        <template #filter>
            <Filter></Filter>
        </template>
        <template #cards>
            <Cards
            :products="getProductByFilter(Category.SHOES,route.params.category)"
            :source="'shoes'"/>
        </template>
   </NuxtLayout>
</template>modules/data