<script setup>
    import { getProductById } from '../../../../modules/product/allProducts';
    const route= useRoute()
    const shoes = getProductById(parseInt(route.params.product))

    const images = computed( () =>{
        const arr = []
        for (const b in shoes) {
            for (const key in shoes[b].images) {
                arr.push(shoes[b].images[key])
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
            :properties="shoes">
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