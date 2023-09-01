<template>
    <div class="container">
        <div class="empty-basket">
            <h1>Your cart is empty</h1>
            
            <NuxtLink to="/products" class="continue">Continue shopping</NuxtLink>
            <h2>Have an account?</h2>
            <p><NuxtLink to="/user">Log in</NuxtLink> to check out faster.</p>
        </div>
    </div>
</template>

<style scoped>

.container{
    box-sizing: border-box;
    padding: 4rem 0 2rem 0;
}

.empty-basket{
    width: fit-content;
    margin:0 auto;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
}

h1{
        margin-bottom: 2rem;
        font-size: 2.5rem;
        font-weight: 500;
    }
.continue{
        outline: none;
        border: none;
        background-color: var(--black100);
        color: var(--gray100);
        padding: 0.875rem 1.75rem;
        font-size: 1.125rem;
        cursor: pointer;
        margin-bottom: 3rem;
    }

    h2{
        margin-bottom: 1rem;
        font-size: 1.625rem;
        font-weight: 400;
    }
    .continue:hover{
        transform: scale(1.03);
    }

    p{
        color: var(--gray300);
        font-size: 1.125rem;
        
    }

    p a{
        text-decoration: underline;
        text-underline-offset: 0.25rem;
        cursor: pointer;
    }

</style>