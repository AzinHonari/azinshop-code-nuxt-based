<template>
    <div class="container">
        <div class="product">
            <div class="medias">
                <slot name="medias">
                </slot>
            </div>
            <div class="properties">
                <slot name="properties">
                </slot>
            </div>
        </div>
        <div class="text-image">
            <slot name="textImage">
            </slot>
        </div>
        <div class="related-products">
            <slot name="relatedProducts">
            </slot>
            
        </div>
    </div>
</template>

<style scoped>
    .container{
        display: flex;
        flex-direction: column;
        margin-top: 3rem;
    }

    .container .product{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
    .container .product .medias{
        width: 65%;
    }

    .container .product .properties{
        width: 35%;
    }

    @media only screen and (max-width: 800px)  {    
        
        .container .product{
            flex-direction: column;
        }
        .container .product .medias{
            width: 100%;
        }

        .container .product .properties{
            width: 100%;
        }

    }

</style>