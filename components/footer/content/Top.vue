<script setup>
    const props = defineProps({
        direction: String
    })

    
    
</script>

<template>
    <div class="wrapper">
        <div class="top-container">
            <div class="links-container">
                <div class="quick-links">
                    <h4>Quick links</h4>
                    <HeaderWeb
                     :direction="direction"
                     />
                </div>
                <div class="info">
                    <h4>Info</h4>
                    <ul>
                        <li>
                            <NuxtLink active-class="active-info" to="/about">About</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink active-class="active-info" to="/contact">Contact</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink active-class="active-info" to="/shippingpolicy">Shipping policy</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink active-class="active-info" to="/blog">Blog</NuxtLink>
                        </li>
                    </ul>
                </div>
                <div class="mission">
                    <h4>My goal</h4>
                    <p>My primary goal in creating this website, a sample shopping site, is to demonstrate my expertise in front-end coding. 
                        I employed <em>Vue</em> and <em>Nuxt</em> frameworks for its development, , crafting all the styles from scratch without relying on any external libraries.
                        The site's design is derived from the Shopify <em><a target="_blank" href="https://themes.shopify.com/themes/dawn/styles/default/preview">dawn</a></em> theme.
                        More details in <em><NuxtLink to="/about">About Me</NuxtLink></em>
                    </p>
                </div>
            </div>
            <div class="subscriptions-container">
                <div class="email-subscription">
                    <h4>
                        Subscribe to our emails
                    </h4>
                    <div class="email-field">
                        <input type="text" class="email-input" id="email">
                        <label class="email-label" for="email">Email</label>
                        <button type="submit" class="icon-arrow-right email-sumbit"></button>
                    </div>
                    
                </div>
                <div class="social">
                    <ul>
                        <li>
                            <a class="icon-facebook"></a>
                        </li>
                        <li>
                            <a class="icon-youtube"></a>
                        </li>
                        <li>
                            <a class="icon-instagram"></a>
                        </li>
                        <li>
                            <a class="icon-twitter"></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped>

.wrapper{
        border-top: solid 0.0625rem var(--gray100);
    }


    .top-container{
        max-width: 75rem;
        margin: 0 auto;
        display: flex;
       flex-direction: column;
       padding: 3rem 0;

    }

    h4{
        font-size: 1.25rem;
        color: var(--gray300);
        margin-bottom: 1rem;
    }

    /* links ------------------------------------------------- */

    .links-container{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        margin-bottom: 3rem;

    }

    
    .info ul{
        display: flex;
        flex-direction: column;
    }

    .info li{
        list-style: none;
        display: block;
    }


    .info li a{
        text-decoration: none;
        display: block;
        color: var(--gray200);
        display: inline-block;
        cursor: pointer;

        padding-right: 1rem;
        display: flex;
        align-items: center;
        font-size: 1rem;
        line-height: 2rem;
    }

    .info li a:hover{
        text-decoration: underline;
        text-underline-offset: 0.25rem;
        color: var(--gray300);
        font-weight: 500;
    }

    .info .active-info{
        color: var(--pink100);
        text-decoration: underline;
        text-underline-offset: 0.3125rem;
    }


    .mission em{
        font-style: italic;
        color: var(--gray300);
    }

    .mission em a{
        text-decoration: underline;
        color: var(--pink100);
        text-underline-offset: 0.3125rem;
    }

    .mission em a:hover{
        font-weight: 800;
        
    }

    .mission p{
        color: var(--gray200);
        font-size: 1rem;
        line-height: 1.5rem;
    }


    /* subscriptions ------------------------------------------------- */
    .subscriptions-container{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        align-items: end;
    }

    .email-field{
        border: 0.0625rem solid var(--gray200);
        width: fit-content;
        padding: 1rem 0.25rem 0.5rem 1rem;
        position: relative
    }

    .email-label{
        position: absolute;
        top: 1.125rem;
        left: 1rem;
        transition: all .2s;
    }

    .email-input{
        height: 1.5rem;
        padding: 0;
        outline: none;
        border: none;
        width: calc(100% - 2rem);
    }

    .email-input:focus + label{
       top:0.25rem;
       font-size: 0.75rem;
    }


    .email-sumbit{
        outline: none;
        border: none;
        background-color: white;
        font-size: 1rem;
        cursor: pointer;
    }


    .social ul{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-end;
        cursor: pointer;
    }
    .social ul li a{
        font-size: 1.25rem;
        line-height: 1.25rem;
        margin-left: 1rem;
        color: var(--gray300);
    }
    @media only screen and (max-width: 800px)  {
        .links-container{
        grid-template-columns: repeat(2, 1fr);

    }
    .mission{
        grid-column: 1 / 3;
        margin-top:  2rem;
    }


    
    .subscriptions-container{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
    }

    .social ul{
        margin-top: 3rem;
    }

}



</style>modules/rules