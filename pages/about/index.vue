<script setup>
    import {getInformation} from '../../modules/person/information'

    const person = getInformation()
</script>

<template>
    
    <div class="wrapper" >
        <h1>About</h1>
        <div class="img" style="background-image: url(img/about/background-flower.jpg);">
            <div class="profile">
                <h2 class="name">{{ person.name }}</h2>
                <h3 class="headline">{{ person.headline }}</h3>
                <h3 class="education">{{ person.education }}</h3>
                <a class="link" :href="person.linkedinProfile" target="_blank">LinkedIn profile</a>
            </div>
        </div>
        <div class="details">
            <div class="about">
                <h2 class="title">About</h2>
                <p class="description">{{ person.about }}</p>
            </div>
            <div class="skills">
                <h2 class="title">Top Skills</h2>
                <ul>
                    <li v-for="skill in person.topSkills">
                        {{ skill }}
                    </li>
                </ul>
            </div>
            <div class="experience">
                <h2 class="title">Experiences</h2>
                <ul>
                    <li v-for="experience in person.experiences">
                        <h3 class="title">{{ experience.title }}</h3>
                        <h4 class="company">{{ experience.company }}</h4>
                        <ul>
                            <li v-for="description in experience.descripiton">
                                <p class="description">{{ description }}</p>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .wrapper{
        display:flex;
        flex-direction: column;
        flex-wrap: wrap;
        box-sizing: border-box;
        padding: 4rem 0 2rem 0;
    }
    h1{
        margin-bottom: 2rem;
        font-size: 3rem;
        font-weight: 500;
    }

    .img{
        display:block;
        position: relative;
        width: 100%;
        height: 20rem;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
    }

    .profile{
        position: absolute;
        top: 50%;
        left:50%;
        transform: translateY(-50%);
    }

     .profile .name{
        font-size: 2rem;
        font-weight: 600;
        margin-bottom: 1.5rem;
    }

     .profile .headline{
        font-size: 1rem;
        font-weight: 800;
        color: var(--gray300);
        margin-bottom: 1rem;
    }

     .profile .education{
        font-size: 0.875rem;
        font-weight: 400;
        color: var(--gray200);
        margin-bottom: 1rem;
    }

     .profile .link{
        font-size: 0.875rem;
        font-weight: 700;
        color: var(--gray300);
        margin-bottom: 1rem;
        text-decoration: underline;
        text-underline-offset: 0.25rem;
    }
     .profile .link:hover{
        color: var(--pink100);
    }


    .details{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }

    .details > div{
        width: calc(100% - 20rem);
        box-sizing: border-box;
    }

    .details > div:nth-of-type(2){
        width: fit-content;
        box-sizing: border-box;
        margin-left: auto;
        margin-right: 6rem;
    }


    .details .experience{
        width: 100%;

    }
     .details div > .title{
        font-size: 1.5rem;
        font-weight: 500;
        color: var(--gray400);
        margin:4rem 0 1.5rem 0;

    }


     .details .about p{
        font-size: 1.125rem;
        font-weight: 200;
        color: var(--gray200);
        line-height: 1.6875rem;
        margin-bottom: 1rem;
        padding-right: 2rem;
    }


     .details .skills li{
        font-size: 1.25rem;
        font-weight: 500;
        color: var(--gray300);
        line-height: 1.75rem;
        list-style: square inside;
    }

     .details .experience ul{
        margin-bottom: 2rem;
    }

     .details .experience ul .title{
        font-size: 1rem;
        font-weight: 800;
        color: var(--gray400);
        margin-bottom: 0.5rem;
    }

     .details .experience ul .company{
        font-size: 0.875rem;
        font-weight: 400;
        color: var(--gray300);
        margin-bottom: 1rem;
    }

     .details .experience ul .description{
        font-size: 1rem;
        font-weight: 200;
        color: var(--gray200);
        line-height: 1.6875rem;
        margin-bottom: 1rem;
        padding-right: 2rem;
    }

    @media only screen and (max-width: 900px)  {
        .details > div{
        width: calc(100% - 10rem);
    }

    .details > div:nth-of-type(2){
        margin-right: 1rem;
    }
    }

    @media only screen and (max-width: 750px)  {
        .details > div{
        width: 100%;
    }

    .details > div:nth-of-type(2){
        widows: 100%;margin: 0;
    }
    }

    @media only screen and (max-width: 500px)  {
    .profile{
        position: absolute;
        top: 50%;
        left:40%;
        transform: translateY(-50%);
    }
}

</style>