<template>
    <div class="container">
        <h1>Shipping</h1>
        <p>We ship worldwide. Your order will be carefully packaged and delivered wherever is most convenient for you. Shipping is free on all orders. Delivery takes between 2-4 business days depending on your location, you can check the country list on our shipping page. You'll be able to track your package by using the Shipping Confirmation email that we send as soon as your order begins its journey. Please allow 2 business days to receive your shipment notification email after placing your order.</p>
    </div>
</template>

<style scoped>
    .container{
        width: 45rem;
        margin: 0 auto;
        box-sizing: border-box;
        padding: 4rem 0 2rem 0;
    }
    h1{
        margin-bottom: 2rem;
        font-size: 3rem;
        font-weight: 500;
    }
    p{
        font-size: 1.125rem;
        line-height: 1.75rem;
        color: var(--gray200);
    }

    @media only screen and (max-width: 770px)  {
        .container{
        width: 100%;
    }
}
</style>