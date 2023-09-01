<script setup>
    const props = defineProps(["category", "title","items"])
</script>

<template>
    <NuxtLayout name="facet">
        <template #facetTitle>
            {{props.title}}
        </template>
        <template #facetHeader>
            <FilterFacetListHeader
                :category="props.category">
            </FilterFacetListHeader>
        </template>
        <template #facetBody>
            <FilterFacetListBody
                :category="props.category"
                :items="props.items">
            </FilterFacetListBody>
        </template>
    </NuxtLayout>
</template>

<style scoped>


</style>