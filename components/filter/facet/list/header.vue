<script setup>
    const props = defineProps(['category'])

    const reset = () => {
        if(props.category === 'color'){
            useProductColor().value.map(x => x.selected = false)
        }
        else if(props.category === 'availability'){
            useProductAvailability().value.map(x => x.selected = false)
        }
        else if(props.category === 'type'){
            useProductType().value.map(x => x.selected = false)
        }
       
    }

    const counter = ref(0)
    const selectedItems = computed( () => {
        counter.value = 0
        if(props.category === 'color'){
            useProductColor().value.map(x => {if(x.selected) {  counter.value += 1}} )
        }
        else if(props.category === 'availability'){
            useProductAvailability().value.map(x => {if(x.selected) {  counter.value += 1}} )
        }
        
        return counter.value
    })
    
    
</script>
<template>

    <div class="header">
        <span class="content">{{selectedItems}} selected</span>
        <button class="reset" @click="reset">Reset</button>
    </div>
    
</template>

<style scoped>
.header{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
}

.reset{
    outline: none;
    background-color: white;
    border: none;
    cursor: pointer;
    text-decoration: underline;
    text-underline-offset: 0.25rem;
}
</style>