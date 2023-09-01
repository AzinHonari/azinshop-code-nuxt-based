<script setup>

    const {items} = defineProps(["items"])
    const emits = defineEmits(["back", "toggle"])
    const router=useRouter()
    const active=ref()

    const goToPage = (url) =>{
        router.push(url)
        active.value = url
        emits('toggle')
    }

</script>

<template>
    <div class="back-item" @click="$emit('back')">
        <span  class="icon-arrow-left"></span>
        <span>Back</span>
    </div>
    
    <ul class="sub-menu">
        <li 
        v-for="(item) in items" 
        @click="goToPage(item.url)"
        :class="active === item.url ? 'active' : ''">
            {{ item.name }}
        </li>
    </ul>
</template>

<style scoped>

    .back-item{
        box-sizing: border-box;
        width: 100%;
        padding: 3rem 2rem;
        font-size: 1rem;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;
        font-size: 1.25rem;
        font-weight: 600;
        color: var(--gray200);
    }

    .back-item span::before{
        margin-right: 1rem;
        font-size: 1.25rem;
        font-weight: 600;
        color: var(--gray200);
    }
    .sub-menu{
        width: 100%;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        overflow: hidden;
    }

    .sub-menu li{
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        box-sizing: border-box;
        padding: 1rem 2rem;
        font-size: 1.25rem;
        color: var(--gray300);
    }

    .sub-menu li:nth-of-type(2n + 1){
        background-color: var(--gray500);
    }
</style>