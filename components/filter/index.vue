<script setup>

    const productColor = useProductColor()
    const productAvailability = useProductAvailability()
    const productType = useProductType()

    const showFilter = ref(false)

</script>

<template>
    <div class="filter-container">

        
        <div class="web-header">
            <h2>Filter:</h2>
        </div>

        <div class="mobile-header" 
        @click="showFilter = !showFilter"
        :class="showFilter && 'active-header'">
            <span>Filter</span>
            <span class="icon-keyboard_arrow_down"></span>
        </div>

        <div class="filter web" >
            <FilterFacetList
            category="availability"
            title="Availability"
            :items="productAvailability"
            ></FilterFacetList>
            <FilterFacetRange
            :title="'Price'"
            ></FilterFacetRange>
            <FilterFacetList
            category="color"
            title="Color"
            :items="productColor"
            ></FilterFacetList>
            <FilterFacetList
            category="type"
            title="type"
            :items="productType"
            ></FilterFacetList>
        </div>

        <transition>
            <div class="filter mobile" v-show="showFilter">
                <FilterFacetList
                category="availability"
                title="Availability"
                :items="productAvailability"
                ></FilterFacetList>
                <FilterFacetRange
                :title="'Price'"
                ></FilterFacetRange>
                <FilterFacetList
                category="color"
                title="Color"
                :items="productColor"
                ></FilterFacetList>
                <FilterFacetList
                category="type"
                title="type"
                :items="productType"
                ></FilterFacetList>
            </div>  
        </transition>

    </div>
</template>

<style scoped>
.filter-container{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin: 2rem 0;
    width: 100%;
    
}

.filter-container .web-header{
    display: block;
    font-size: 1rem;
    color: var(--gray300);
    line-height: 1rem;
}

.filter-container .mobile-header{
    display: none;
}


.filter-container .filter{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

.filter-container .web{
    display: flex;
}

.filter-container .mobile{
    display: none;
    
}


@media only screen and (max-width: 800px)  {

    
    .v-enter-active, .v-leave-active {
    transition: all 0.5s ease-out;
    }

    .v-enter-from, .v-leave-to {
        transform: translateX(-100%);
    }

    
    .filter-container{
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        margin: 2rem 0;
        width: 100%;
        position: relative;
    }

    .filter-container .web, .filter-container .web-header{
        display: none;
    }

    .filter-container .mobile-header{
        display: flex;
        flex-direction: row;
        align-items: center;
        line-height: 1rem;
        
    }
    .filter-container .mobile-header span:first-of-type{
        margin-right: 0.5rem;
    }

    .filter-container .active-header{
        color: var(--pink100);
        font-weight: 600;
    }



    .filter-container .mobile{
        
        box-sizing: border-box;
        margin-top: 0.5rem;
        padding: 1rem;
        box-shadow: 0 0 0 0.0625rem var(--gray100);
        display: flex;
        flex-direction: row;
        width: 100%;
        min-height: 5rem;
        position: absolute;
        z-index: 1;
        top: 1rem;
        background-color: white;
        justify-content: space-between;
        align-content: space-between;
        
    }





}

</style>

