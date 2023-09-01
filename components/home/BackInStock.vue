<script setup>

    const props = defineProps(["products"])

</script>

<template>

    <div class="back-in-stock-container">
        <h2>Back in stock!</h2>
        <div class="items">
                <NuxtLink
                v-for="(item, index) in products" 
                class="item" 
                :to="index === 1 ? `${item.category}/${item.subCategory}/${item.id}` : index === 0 ? '/bags' : '/shoes'">
                    <div class="item-image" :style="{ 'background-image': 'url(' + item.image + ')' }">
                    </div>
                    <h4 class="item-caption" v-show="index === 1">{{item.name}}</h4>
                    <p class="item-price" v-show="index === 1">{{ `€${item.price} EUR` }}</p>
                    <h3 class="item-title" v-show="index === 0"><span>Bags</span><span class="arrow icon-arrow-right"></span></h3>
                    <h3 class="item-title" v-show="index === 2"><span>Shoes</span><span class="arrow icon-arrow-right"></span></h3>
                </NuxtLink>
            </div>
    </div>
    
</template>

<style scoped>
    .back-in-stock-container{
        box-sizing: border-box;
        width: 75rem;
        margin: 0 auto;
        background-color: white;
    }
    .back-in-stock-container h2{
        font-size: 1.75rem;
        line-height: 4rem;
        font-weight: 400;
        margin-top: 4rem;
        margin-bottom: 1rem;
    }

    .items{
        display: grid;
        grid-template-columns: calc(70% - 0.25rem) calc(30% - 0.25rem);
        grid-template-rows: calc(25rem - 0.25rem) calc(25rem - 0.25rem);
        justify-content: space-between;
    }

    .item{
        display: flex;
        flex-direction: column;
        margin-bottom: 1em;
        cursor: pointer;
        
    }

    .item:first-of-type{
        grid-column: 1;
        grid-row: 1 / 3;
    }




    .item .item-image{
        width: 100%;
        height: 100%;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        margin-bottom: 0.6rem;
        transition: all 0.4s ease-in-out;
    }

    

    .item:hover .item-image{
        transform: scale(1.005);
        box-shadow: 0px 6px 11px -4px rgba(189,189,189,1);
}

.item .item-caption{
    width: 100%;
    font-size: 0.875rem;
    color: var(--gray200);
    line-height: 1.5rem;
    text-underline-offset: 0.25rem;
}


.item-title{
    position: relative;
    height: 1rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 0.5rem;
}
.item-title span{
    position: relative;
    font-size: 1.25rem;
    line-height: 2rem;
    font-weight: 400;
}

.item:hover .item-caption{
    text-decoration: underline;
}

.item .item-title .arrow{
    margin-left: 0.25rem;
}

.item .item-title .arrow::before{
    line-height: 2rem;
}

.item .item-title .arrow::after{
    content: '-';
    position: absolute;
    left: 0.15rem;
    top: -0.27rem;
}

.item:hover .item-title .arrow::before{
    padding-left: 0.125rem;
}


@media only screen and (max-width: 1200px)  {
    .back-in-stock-container{
        width: 100%;
        padding: 0 2rem;
    }
}

@media only screen and (max-width: 900px)  {

    .back-in-stock-container h2{
        font-size: 1.75rem;
        line-height: 3rem;
    }

    .items{
        grid-template-columns: calc(60% - 0.25rem) calc(40% - 0.25rem);
        grid-template-rows: calc(20rem - 0.25rem) calc(20rem - 0.25rem);
    }
}

@media only screen and (max-width: 600px)  {
    .items{
        grid-template-columns: calc(60% - 0.25rem) calc(40% - 0.25rem);
        grid-template-rows: calc(14rem - 0.25rem) calc(14rem - 0.25rem);
    }
}



</style>