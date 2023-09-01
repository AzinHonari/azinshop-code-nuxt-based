<template>
    <div class="icons">
        <NuxtLink active-class="active" class="icon-search"></NuxtLink>
        <NuxtLink active-class="active" class="icon-user-fill" to="/user"></NuxtLink>
        <NuxtLink active-class="active" class="icon-shopping-basket" to="/cart"></NuxtLink>
    </div>
</template>

<style scoped>
    .icons{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        
    }

    .icons a{
        text-decoration: none;
        cursor: pointer;
        color: var(--gray200);
        margin-left: 1rem;
        font-size: 1.25rem;
        font-weight: 100;
    }

    .icons a:hover{
        color: var(--gray300);
        font-weight: 200;
    }

    .icons .active{
        color: var(--pink100);
        font-weight: 200;
    }

</style>