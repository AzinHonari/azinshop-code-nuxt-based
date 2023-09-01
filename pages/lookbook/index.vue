<template>
    <h1>
        Summer inspiration
    </h1>
    <div class="container">
        <div class="gallary">
            
            <div class="img-1" style="background-image:  url(img/products/bag-shoulder-leaf-blue/bag-shoulder-leaf-blue-02.jpg);"></div>
            <div class="img-2" style="background-image:  url(img/products/bag-shoulder-leaf-brown/bag-shoulder-leaf-brown-03.jpg);"></div>
            <div class="img-3" style="background-image:  url(img/products/bag-mini-bubble-black/bag-mini-bubble-black-02.jpg);"></div>
            <div class="img-4" style="background-image:  url(img/products/bag-mini-bubble-gold/bag-mini-bubble-gold-02.jpg);"></div>
            
            <div class="img-10" style="background-image: url(img/products/bag-shoulder-sara-brown/bag-shoulder-sara-brown-03.jpg);"></div>
            <div class="img-11" style="background-image: url(img/products/shoe-boot-rainbow-brown/shoe-boot-rainbow-brown-03.jpg);"></div>

            <div class="img-5" style="background-image:  url(img/products/bag-shoulder-zebra-black/bag-shoulder-zebra-black-03.jpg);"></div>
            <div class="img-6" style="background-image:  url(img/products/shoe-boot-roxana-red/shoe-boot-roxana-red-03.jpg);"></div>
            <div class="img-7" style="background-image:  url(img/products/shoe-boot-himaliya-green/shoe-boot-himaliya-green-02.jpg);"></div>
            <div class="img-8" style="background-image:  url(img/products/bag-backpack-alborz-emerald/bag-backpack-alborz-emerald-01.jpg);"></div>
            <div class="img-9" style="background-image:  url(img/products/bag-backpack-mary-latte/bag-backpack-mary-latte-01.jpg);"></div>
            
        </div>
        <div class="featured">

        </div>
    </div>
</template>

<style scoped>
    h1{
        font-size: 2.5rem;
        font-weight: 400;
        margin: 3rem 0;
    }
   
    .gallary{

        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        
        grid-template-areas: 
        "img1 img1 img2"
        "img3 img4 img4"
        "sara1 sara1 sara2"
        "img5 img6 img6"
        "img7 img7 img8"
        "img7 img7 img9";

    }

    .gallary div{
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        margin: 0.5rem 0;
        
    }

    .img-1 {
     grid-area: img1;
     height: 45rem;
     margin-right: 1rem;
     width: calc(100% - 1rem);
    }

    .img-2 {
     grid-area: img2;
     height: 45rem;
     width: 100%;
    }

    .img-3 {
     grid-area: img3;
     height: 30rem;
     margin-right: 1rem;
     width: calc(100% - 1rem);
    }

    .img-4 {
     grid-area: img4;
     height: 30rem;
    }
    .img-10{
        grid-area: sara1;
        height: 30rem;
        margin-right: 1rem;
        width: calc(100% - 1rem);
    }

    .img-11{
        grid-area: sara2;
        height: 30rem;
    }

    .img-5 {
     grid-area: img5;
     height: 45rem;
     margin-right: 1rem;
     width: calc(100% - 1rem);
    }

    .img-6 {
     grid-area: img6;
     height: 45rem;
    } 

    .img-7 {
     grid-area: img7;
     height: 47rem;
     margin-right: 1rem;
     width: calc(100% - 1rem);
    }

    .img-8 {
     grid-area: img8;
     height: 23rem;
    }
    
    .img-9 {
     grid-area: img9;
     height: 23rem;
    }

    @media only screen and (max-width: 800px)  {
    h1{
        font-size: 2rem;
    }
    
        .img-1 {
     height: 30rem;
    }

    .img-2 {
     height: 30rem;
    }

    .img-3 {
     height: 25rem;
    }

    .img-4 {
     height: 25rem;
    }
    .img-10{
        height: 25rem;
    }

    .img-11{
        height: 25rem;
    }

    .img-5 {
     height: 30rem;
    }

    .img-6 {
        height: 30rem;
    } 

    .img-7 {
     height: 31rem;
    }

    .img-8 {
     height: 15rem;
    }
    
    .img-9 {
     height: 15rem;
    }

}

@media only screen and (max-width: 600px)  {
    h1{
        font-size: 1.75rem;
    }

    .gallary{

        display: grid;
        grid-template-columns: 1fr 1fr 1fr;

        grid-template-areas: 
        "img1 img1 img2"
        "img1 img1 img3"

        "img4 img4 img4"
        "img6 img6 img6"

        "sara2 sara1 sara1"
        "img5 sara1 sara1"
        
        "img7 img7 img7";

}
  
.img-1 {
     height: 25rem;
     margin-bottom: 1rem;
    }

    .img-2 {
     height: 12rem;
     margin-bottom: 1rem;
    }

    .img-3 {
     height: 12rem;
     margin-right: 0;
     width: 100%;
     margin-bottom: 1rem;

    }

    .img-4 {
     height: 25rem;
     margin-bottom: 1rem;
    }
    .img-10{
        margin: 0;
        height: 30rem;
        margin-right: 0 !important;
        margin-left: 1rem !important;
        width: calc(100% - 1rem);
    }

    .img-11{
        height: 14rem;
        margin-right: 0 !important;
    }

    .img-5 {
     height: 14rem;
     width: 100%;
     margin-right: 0 !important;
    }

    .img-6 {
        height: 30rem;
    } 

    .img-7 {
     height: 32rem;
     width: 100%;
    }

    .img-8 {
     display: none;
    }
    
    .img-9 {
     display: none;
    }

}

</style>