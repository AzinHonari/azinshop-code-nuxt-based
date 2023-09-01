<template>
    <div class="logo">
        <nuxt-link  to="/" active-class="active">
            Azin
        </nuxt-link>
    </div>
</template>

<style scoped>

    .logo a{
        text-decoration: none;
        display: block;
        color: var(--gray200);
        display: inline-block;
        cursor: pointer;
        font-size: 2rem;
        color: var(--pink100);
        font-weight: 800;
    }

    .logo .active{
        color: var(--pink100);
    }
</style>