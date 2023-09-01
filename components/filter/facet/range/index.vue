<script setup>
    const {title} = defineProps(["title"])
</script>

<template>
    <NuxtLayout name="facet">
        <template #facetTitle>
            {{title}}
        </template>
        <template #facetHeader>
            <FilterFacetRangeHeader></FilterFacetRangeHeader>
        </template>
        <template #facetBody>
            <FilterFacetRangeBody></FilterFacetRangeBody>
        </template>
    </NuxtLayout>
</template>

<style scoped>


</style>