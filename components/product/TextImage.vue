<template>
    <div class="container">
        <div class="description">
            <h3>A new kind of bag.</h3>
            <p>
                Unexpected shapes with smart details, functionality, a new luxury feel with a contemporary price point.
            </p>
        </div>
        <div class="image" style="background-image: url(/assets/img/products/bag-backpack-mary-latte/bag-backpack-mary-latte-01.jpg);">
        </div>
        <div class="content">
            <h3>
                Free Shipping
            </h3>
            <p>We offer free worldwide express shipping on all orders. You'll receive your order an estimated 1–4 days after shipment.</p>
        </div>
        <div class="content">
            <h3>
                Hassle-Free Exchanges
            </h3>
            <p>Exchanges are free. Try from the comfort of your home. We will collect from your home, work or an alternative address. </p>
        </div>
    </div>
</template>

<style scoped>
    .container{
        display: grid;
        grid-template-columns: repeat(2, 50%);
        margin: 2rem 0;

    }
    .description{
        padding: 4rem;
        background-color: var(--gray500);
        height: 22rem;
    }
    .description h3{
        font-size: 2.5rem;
        line-height: 6rem;
        font-weight: 200;
    }

    .description p{
        font-size: 1.25rem;
        line-height: 2rem;
        font-weight: 200;
        color: var(--gray200);
    }

    .image{
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    .content{
        padding: 3rem 1.5rem 3rem 0.75rem;
    }

    .content h3{
        font-size: 1.25rem;
        line-height: 3rem;
        font-weight: 400;
        color: var(--gray400);

    }
    .content p{
        font-size: 1.125rem;
        line-height: 2rem;
        font-weight: 200;
        color: var(--gray200);
    }

</style>