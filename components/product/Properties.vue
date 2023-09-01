<script setup>
    const {properties} = defineProps(['properties'])

    const firstItem = properties[0]
    const selectedColor = ref(firstItem.color)
    const selectedPrice = ref(firstItem.price)

    usePreviewImage().value = firstItem.images[0].url
    

    const setItems = (stock) =>{
        selectedColor.value = stock.color
        selectedPrice.value = stock.price
        usePreviewImage().value = stock.images[0].url
    }

    const setClasses = (stock) => {
        const classes = []
        if(!stock.available) classes.push('color-unavailable')
        if(stock.color === selectedColor.value) classes.push('color-active')

        return classes.join(' ')
      
    }

    
    /* quantity ---- */
    const quantity = ref(0)
    


</script>

<template>
<div class="container">

    <h1 class="title">
        {{firstItem.name}}
    </h1>

    <h2 class="price">
        {{ `€${selectedPrice} EUR`}}
    </h2>

    <div class="color">
        <h3>Color</h3>
        <ul>
            
            <template v-for="(stock) in properties">
                <li 
                :class="setClasses(stock)"
                @click="setItems(stock)"
                >
                    {{ stock.color }}
                </li>
            </template>
            
            
        </ul>
    </div>

    <div class="quantity">
        <label for="quantity">Quantity</label>
        <div class="quantity-action">
            <button 
                class="minus-quantity"
                @click="quantity > 0 ? quantity -- : quantity"
                :disabled="quantity > 0 ? false : true">-</button>
            <input 
            id="quantity" 
            type="text" 
            :v-model="quantity" 
            :value="quantity">
            <button 
            class="add-quantity"
            @click="quantity++">+</button>
        </div>
        
    </div>

    <div class="action">
        <button >Add to cart</button>
        <button >Buy it now</button>
    </div>
    
    <div class="description">
        <p>{{firstItem.description}}</p>
    </div>

    <div class="summary">
        <div class="section">
            <div class="title">
                <span class="icon-puzzle icon"></span>
                <h3>Materials</h3>
                <span class="icon-keyboard_arrow_down arrow"></span>
            </div>
            <div class="content">
                <p>{{ firstItem.materials }}</p>
            </div>
        </div>
        <div class="section">
            <div class="title">
                <span class="icon-truck icon"></span>
                <h3>Shipping & Returns</h3>
                <span class="icon-keyboard_arrow_down arrow"></span>
            </div>
            <div class="content">
                <p>{{ firstItem.shippingAndReturn }}</p>
            </div>
        </div>
        <div class="section">
            <div class="title">
                <span class="icon-edit-cut icon"></span>
                <h3>Dimensions</h3>
                <span class="icon-keyboard_arrow_down arrow"></span>
            </div>
            <div class="content">
                <p>{{firstItem.dimensions}}</p>
            </div>
        </div>
        <div class="section">
            <div class="title">
                <span class="icon-heart icon"></span>
                <h3>Care Instructions</h3>
                <span class="icon-keyboard_arrow_down arrow"></span>
            </div>
            <div class="content">
                <p>{{ firstItem.careInstructions }}</p>
            </div>
        </div>
    </div>

    <div class="share">
        <span class="icon-share icon"></span>
        <span>Share</span>
    </div>


</div>
</template>

<style scoped>
    .container{
        display: flex;
        flex-direction: column;
        padding: 0.5rem 1rem;
        padding-left: 2rem;
        color: var(--gray300);
        position: sticky;
        top: 0;
    }
    .container > *{
        margin-bottom: 1.5rem;
    }

    .title{
        font-size: 2.5rem;
        font-weight: 400;
        color: black;
    }

    .price{
        font-size: 1.25rem;

    }

    .color h3{
        font-size: 1rem;
        color: var(--gray200);
        margin-bottom: 0.5rem;
    }

    .color ul{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
    }
    .color ul li{
        display: block;
        font-size: 1.0625rem;
        color: var(--gray300);
        margin-right: 0.75rem;
        border: solid var(--gray200) 0.0625rem;
        padding: 0.5rem 1rem;
        border-radius: 1rem;
        cursor: pointer;
    }
    .color ul li:hover{
        border-color: var(--gray300);
    }
    .color .color-available{
        color: rebeccapurple;
    }

    .color .color-unavailable{
        text-decoration: line-through;
        color: var(--gray200);
    }

    .color .color-unavailable:hover{
        border-color: var(--gray200);
    }

    .color .color-active{
        background-color: black;
        color: white;
    }


    .quantity label{
        display: block;
        font-size: 1rem;
        color: var(--gray200);
        margin-bottom: 0.5rem;
    }

    .quantity-action{
        display: flex;
        justify-content: flex-start;
        outline: solid 0.0625rem var(--gray300);
        width: fit-content;
    }
    .quantity-action button, .quantity-action input{
        border: none;
        padding: 1rem 0;
        font-size: 0.9375rem;
        font-weight: 200;
        color: var(--gray300);
        background-color: white;
        width: 4rem;
        text-align: center;
    }
    .quantity-action  button{
        width: 3.5rem;
        cursor: pointer;
    }


    /* --------------------------- */

    .action{
        display: flex;
        flex-direction: column;
        margin: 0.5rem 0 2rem 0;
    }

    .action > * {
        box-sizing: border-box;
        border: solid 0.0625rem var(--gray300);
        outline: none;
        padding: 1rem 0;
        font-size: 0.9375rem;
        font-weight: 200;
        color: var(--gray300);
        background-color: white;
        cursor: pointer;
        transition: all 0.2s;
    }

    .action button:nth-child(2){
        background-color: black;
        color: white;
        margin-top: 0.5rem;
    }

    .action button:hover{
        box-shadow: 0 0 0.125rem 0.0625rem  var(--gray200);
    }


  

    /*  -------------------------- */

    .description{
        font-size: 1.125rem;
        line-height: 1.75rem;
        font-weight: 200;
        color: var(--gray200);
        margin-bottom: 2rem;
    }

    .summary{
        display: flex;
        flex-direction: column;
    }

    .summary .section{
        display: flex;
        flex-direction: column;
        border-top: solid var(--gray100) 0.0625rem;
        padding: 0.75rem 0;
    }

    .summary .title{
        display: flex;
        position: relative;
        flex-direction: row;
        justify-content: flex-start;
        font-size: 1.125rem;
        font-weight: 400;
        color: var(--gray300);
        cursor: pointer;
        margin-bottom: 0.75rem;
    }

    .summary .title .icon{
        margin-right: 0.5rem;
        color: var(--gray400);
        font-weight: 600;
    }

    .summary .title .arrow{
        position: absolute;
        right: 0.5rem;
        color: var(--gray200);
    }

    .summary .content{
        font-size: 1.125rem;
        line-height: 1.75rem;
        font-weight: 200;
        color: var(--gray200);
        padding: 0 0.5rem;
    }

    .share{
        font-size: 1rem;
        font-weight: 400;
        color: var(--gray400);
        cursor: pointer;
    }
    .share .icon{
        margin-right: 0.5rem;
        font-size: 0.875rem;
    }


</style>