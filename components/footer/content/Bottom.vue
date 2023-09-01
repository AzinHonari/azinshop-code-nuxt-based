<script setup>
    const date = new Date().getFullYear()
    const currencyList = ["EUR € | Germany", "USD $ | United States", "CAD $ | Canada", "EUR € | France", "GBP £ | United Kingdom"]

    const showCurrencyList = ref(false)
    const currencySelected = ref('EUR € | Germany')

    const currencyChanging = (value) =>{
        currencySelected.value = value
        showCurrencyList.value = false
    }

    const arrowClass = () => showCurrencyList.value ? 'icon-keyboard_arrow_up' : 'icon-keyboard_arrow_down'

</script>
<template>
    <div class="wrapper">
        <div class="bottom-container">
            <div class="currency">
                <label>Country/region</label>

                <div class="currency-selector">
                    <button
                    @click="showCurrencyList = !showCurrencyList">
                        <span class="caption">{{ currencySelected }}</span>
                        <span 
                        class="arrow"
                        :class="arrowClass()"
                        ></span>
                    </button>
                </div>
                <ul class="currency-list" v-show="showCurrencyList">
                    <li v-for="currency in currencyList" @click="currencyChanging(currency)">
                        {{ currency }}
                    </li>
                </ul>
            </div>
            <div class="payment-method">
                <ul>
                    <li class="icon-paypal"></li>
                    <li class="icon-visa"></li>
                    <li class="icon-mastercard"></li>
                </ul>
            </div>
            <div class="copyright">
                <small>&copy; <em>{{ date }}</em>, Azin Honari</small>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .wrapper{
        border-top: solid 0.0625rem var(--gray100);
    }

    .bottom-container{
        max-width: 75rem;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        padding: 3rem 0;
    }

/* currency */
.currency{
    display: flex;
    flex-direction: column;
}

.currency label{
    margin-bottom: .75rem;
}

/* .currency select{
    width: 10rem;
    border: 0.0625rem solid var(--gray200);
    padding: 1rem 1rem 0.5rem 1rem;
}

 */

.currency-selector{
    width: fit-content;
    border: 0.0625rem solid var(--gray200);
}
.currency-selector button{
    outline: none;
    border: none;
    background-color: white;
    width: fit-content;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    font-size: 0.875rem;
    padding: 0.75rem 1rem;
    cursor: pointer;
}




.currency-selector button .arrow{
    font-size: 1.25rem;
    margin-left: 0.75rem;
}

.currency-list{
    width: fit-content;
    border: 0.0625rem solid var(--gray100);
    max-height: 6rem;
    overflow-y: scroll;
    margin: 0.25rem 0;
}


.currency-list li{
    font-size: 1rem;
    line-height: 2rem;
    padding: 0.25rem 1rem 0.25rem 0.5rem;
    cursor: pointer;
}

.currency-list li:hover{
    background-color:var(--gray100);
}


/* payment method */
.payment-method ul{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-end;
        cursor: pointer;
        margin-top: 3rem;
    }
    .payment-method ul li {
        font-size: 1.25rem;
        line-height: 1.25rem;
        margin-left: 1rem;
        color: var(--gray300);
    }

/* copyright */
.copyright{
        grid-template-columns: 1fr;
        font-size: 0.75rem;
        margin-top: 3rem;
    }

    @media only screen and (max-width: 800px)  {
        .bottom-container{
       
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    }
</style>