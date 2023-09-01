<script setup>
    const props= defineProps({
        products:Array,
        source:String
    })

    const route= useRoute()
    const router=useRouter()
    const showAmount= ref(true)
    
    const goToProduct = (id,category,subCategory) =>{
        
        if(props.source === 'bags' || props.source === 'shoes'){
            router.push(`${route.path}/${id}`)
        }
        else if(props.source === 'suggestion' || props.source === 'showAll'){
            router.push(`${category}/${subCategory}/${id}`)
        }
    }

    if(props.source === 'suggestion'){
        showAmount.value = false
    }
    else{
        showAmount.value = true
    }


</script>
<template> 
    <div class="container">
        <span class="amount" v-show="showAmount">{{ `${products.length} products` }}</span>
        <ul class="items" v-if="products.length">
            <li 
            v-for="(product,index) in products" 
            :key="`${product.id}-${product.color}`"
            @click="goToProduct(product.id,product.category, product.subCategory)"
            class="item">
                <img class="item-image" :src="product.image">
                <h4 class="item-caption">{{product.name}}</h4>
                <p class="item-price">{{ `€${product.price} EUR`}}</p>
            </li>
        </ul>
    </div>
</template>

<style scoped>
.container{
    position: relative;
}
.amount{
    position: absolute;
    display: block;
    top: -3rem;
    right: 0;
}
.items{
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, calc(25% - 0.5rem));
    justify-content: space-between;
    margin-top: 2rem;
    text-align: left;
}

.item{
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 1em;
    cursor: pointer;
}

.item .item-image{
    width: 100%;
    margin-bottom: 0.6rem;
    transition: all 0.4s ease-in-out;
}
.item .item-caption{
    width: 100%;
    font-size: 0.875rem;
    color: var(--gray200);
    line-height: 1.5rem;
    text-underline-offset: 0.25rem;
}
.item .item-price{
    width: 100%;
    font-size: 1rem;
    line-height: 1.5rem;
}

.item:hover .item-image{
    transform: scale(1.005);
    box-shadow: 0px 6px 11px -4px rgba(189,189,189,1);
}

.item:hover .item-caption{
    text-decoration: underline;
}



@media only screen and (max-width: 950px)  {
    .items{
        grid-template-columns: repeat(3, calc(100% / 3 - 0.5rem));
    }

}

@media only screen and (max-width: 750px)  {
    .items{
        grid-template-columns: repeat(2, calc(100% / 2 - 0.5rem));
    }

}

</style>