<template>
    
    <div class="container">
        <h1>News</h1>

        <div class="news-items">

            <div class="item headline">
                <div class="img" style="background-image:  url(img/blog/post04.jpg);"></div>
                <h2 class="title">Azinshop origin story</h2>
                <span class="date">JANUARY 18, 2022</span>
                <p class="text">
                                It features a detachable, adjustable strap so can be worn as a crossbody or shoulder bag, or as a top handle design. A practical magnetic closure secures your belongings.
                            </p>
            </div>

            <div class="item">
                <div class="img" style="background-image:  url(img/blog/post02.jpg);"></div>
                <h2 class="title">Introducing new sandal</h2>
                <span class="date">JANUARY 18, 2022</span>
                <p class="text">Its front face showcases folded leather with zigzag edges – an evolution of the technique and craftsmanship. A tonal logo accents the bottom of the bag. Inspired by the structural boxy form and shape of a brick, which lends its name, the bag is perfectly sized for your everyday essentials, from a large phone to your wallet and lipstick.
                            </p>
            </div>

            <div class="item">
                <div class="img" style="background-image:  url(img/blog/post03.jpg);"></div>
                <h2 class="title">Introducing the latest trend</h2>
                <span class="date">JANUARY 18, 2022</span>
                <p class="text">Introducing the latest creation in our Pleated Collection, Brick presents an architectural elegance.
                            </p>
            </div>

        </div>
        
    </div>
</template>

<style scoped>
    .container{
        box-sizing: border-box;
        padding: 4rem 0 2rem 0;
        width: 100%;
        overflow: hidden;
    }


    h1{
        margin-bottom: 2rem;
        font-size: 3rem;
        font-weight: 500;
    }

    .news-items{
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }

    .item{
        box-sizing: border-box;
        width: calc(50% - 0.5rem);
        margin-bottom: 2rem;
        overflow: hidden;
    }
    .item:nth-of-type(2){
        margin-right: 1rem;
    }

    .headline{
        width: 100%;
        text-align: center;
    }
    .headline .text{
       padding: 0 5rem;
    }


    .item .img{
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        width: 100%;
        height: 20rem;
        margin-bottom: 1rem;
    }

    .item .title{
        font-size: 1.25rem;
        font-weight: 400;
        color: var(--gray400);
        margin-bottom: 1rem;
    }

    .item .date{
        font-size: 0.6875rem;
        font-weight: 300;
        color: var(--gray300);
        display: block;
        margin-bottom: 0.75rem;
    }
    .item .text{
        font-size: 1.125rem;
        font-weight: 200;
        color: var(--gray200);
        line-height: 1.6875rem;
        margin-bottom: 1rem;
        padding-right: 2rem;
    }

    @media only screen and (max-width: 900px)  {
        .item .img{
            height: 15rem;
        }
    }
    @media only screen and (max-width: 750px)  {
        .news-items{
        flex-direction: column;
    }

     .headline, .text, .item .text{
            text-align: left;
            padding:0;
            
        }

        .item{
            box-sizing: border-box;
            width: 100%;
            margin-bottom: 2rem;
        }
        .item:nth-of-type(2){
            margin-right: 0;
        }
        .item .img{
            height: 20rem;
        }
    }
</style>