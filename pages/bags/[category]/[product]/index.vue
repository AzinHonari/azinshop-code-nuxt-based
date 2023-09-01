<script setup>
    import { getProductById } from '../../../../modules/product/allProducts';
    const route= useRoute()
    const bags = getProductById(parseInt(route.params.product))
    
    const images = computed( () =>{
        const arr = []
        for (const b in bags) {
            for (const key in bags[b].images) {
                arr.push(bags[b].images[key])
            }
        }
        return arr
    })
    
</script>
<template>
    <NuxtLayout name="product">
         <template #medias>
             <ProductMedia
             :images = images>
            </ProductMedia>
         </template>
         <template #properties>
            <ProductProperties
            :properties="bags">
            </ProductProperties>
         </template>
         <template #textImage>
         </template>
         <template #relatedProducts>
 
         </template>
    </NuxtLayout>
 </template>

 <style scoped>

</style>modules/data