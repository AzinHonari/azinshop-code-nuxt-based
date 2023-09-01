<script setup>
    const componentRef = ref()
    const showFacetList=ref(false)

    useClickOutside(componentRef, () => { 
        showFacetList.value=false

    })
</script>

<template>
    <div class="facet-container" ref="componentRef">

        <div class="filter-facet" @click="showFacetList = !showFacetList">
            <span class="filter-facet-title">
                <slot name="facetTitle"></slot>
            </span>
            <span class="filter-facet-icon icon-keyboard_arrow_down"></span>
        </div>

        <div class="filter-list" v-show="showFacetList">

            <div class="filter-list-header">
                <slot name="facetHeader"></slot>

            </div>

            <div class="filter-list-facets">
                <slot name="facetBody"></slot>
            </div>
            
        </div>
    </div>
</template>

<style scoped>
.facet-container{
    display: flex;
    flex-direction: column;
    position: relative;
}

.filter-facet{
    font-size: 1rem;
    color: var(--gray300);
    cursor: pointer;
    margin: 0 1rem;
}

.filter-facet:hover .filter-facet-title{
    text-decoration: underline;
    color: var(--gray400);
    text-underline-offset: 0.25rem;
}

.filter-list{
    position: absolute;
    top: 2rem;
    left: 0;
    background-color: white;
    box-shadow: 0 0 0 0.0625rem var(--gray100);
    
    z-index: 10;
    display: flex;
    flex-direction: column;
    min-width: 20rem;

    color: var(--gray200);

}

.filter-list-header{
    padding: 1rem;
    border-bottom: 0.0625rem solid var(--gray100);
}


.filter-list-facets{
    padding: 1rem;
}


</style>