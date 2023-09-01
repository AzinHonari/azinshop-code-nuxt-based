<script setup>

    const {items,leftPosition} = defineProps(["items","leftPosition"])
    const router=useRouter()
    const active=ref()

    const goToPage = (url) =>{
        router.push(url)
        active.value = url
    }

</script>

<template>
    <ul class="sub-menu" :style="{left:leftPosition}">
        <li 
        v-for="(item) in items" 
        @click="goToPage(item.url)"
        :class="active === item.url ? 'active' : ''">
            {{ item.name }}
        </li>
    </ul>
</template>

<style scoped>
    .sub-menu{
        display: flex;
        flex-direction: column;
        border: solid 0.0625rem var(--gray100);
        min-width: 8rem;
        position: absolute;
        top: 2.5rem;
        background-color: white;
        z-index: 10;
        padding: 1rem 0;
    }
    .sub-menu li{
        cursor: pointer;
        padding: 0.5rem 1rem;
    }

    .sub-menu li:hover{
        color: var(--gray300);
    }

    .active{
        text-decoration: underline;
        text-underline-offset: 0.3125rem;
    }
</style>