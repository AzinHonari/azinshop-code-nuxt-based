<script setup>

    import { Category } from '@/data';
    import { getProductByFilter } from '../../../modules/product/allProducts';
    import{getColorByQuantity,getAvailabilityByQuantity} from '../../../modules/product/filters'

    const route= useRoute()

    useProductColor().value = getColorByQuantity(Category.BAGS,route.params.category)
    useProductAvailability().value = getAvailabilityByQuantity(Category.BAGS,route.params.category)
    
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
            :products=getProductByFilter(Category.BAGS,route.params.category)
            :source="'bags'"/>
        </template>
   </NuxtLayout>
</template>modules/data