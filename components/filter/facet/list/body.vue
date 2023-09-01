<script setup>

    const props = defineProps(['category','items'])

    const toggle = (t, s) => {
        if(props.category === 'color'){
            useProductColor().value.find(x =>x.title === t ).selected = s
        }
        else if(props.category === 'availability'){
            useProductAvailability().value.find(x =>x.title === t ).selected = s
        }
        else if(props.category === 'type'){
            useProductType().value.find(x =>x.title === t ).selected = s
        }
    }

</script>
<template>

    <ul class="container">

        <li class="option" v-for="item in props.items" @click="toggle(item.title, !item.selected)">
            <input 
            class="option-check" 
            type="checkbox" 
            :checked="item.selected"
            >
            <div class="option-content">
                <span>{{item.title}}</span>
                <span>({{item.quantity}})</span>
            </div>
        </li>
        
    </ul>

</template>

<style scoped>
.container{
    display: flex;
    flex-direction: column;
}

.option{
    cursor: pointer;
    padding: 0.5rem 0;
    font-size: 1rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
}

.option-check{
    margin-right: 0.5rem;
}
.option-content > *{
    margin-right: 0.25rem;
}
</style>