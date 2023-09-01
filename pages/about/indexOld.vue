<script setup>
    import {getInformation} from '../../modules/person/information'

    const person = getInformation()

    const showItem = ref('about')
</script>

<template>
    
    <div class="wrapper" style="background-image: url(../../assets/img/about/background.jpg);">

        <div class="content">
            <div class="image" style="background-image: url(../../assets/img/about/profile.jpg);"></div>
            <div class="body">
                <div class="text">
                
                    <div class="profile">
                        <h2 class="name">{{ person.name }}</h2>
                        <h3 class="headline">{{ person.headline }}</h3>
                        <h3 class="education">{{ person.education }}</h3>
                        <a class="link" :href="person.linkedinProfile" target="_blank">LinkedIn profile</a>
                    </div>
                        
                    <div class="details">
                        <div class="about" v-show="showItem === 'about'">
                            <h2 class="title">About</h2>
                            <p class="description">{{ person.about }}</p>
                        </div>
                        <div class="skills" v-show="showItem === 'skill'">
                            <h2 class="title">Top Skills</h2>
                            <ul>
                                <li v-for="skill in person.topSkills">
                                    {{ skill }}
                                </li>
                            </ul>
                        </div>
                        <div class="experience" v-show="showItem === 'experience'">
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

                <div class="switch">
                    <span @click="showItem='about'" :class="showItem === 'about' && 'active'" class="icon-user-fill"></span>
                    <span @click="showItem='skill'" :class="showItem === 'skill' && 'active'" class="icon-ruler"></span>
                    <span @click="showItem='experience'" :class="showItem === 'experience' && 'active'" class="icon-puzzle experience"></span>
                </div>
            </div>
            
        </div>

        
        
    </div>
</template>

<style scoped>
    .wrapper{
        display:block;
        position: relative;
        width: 100%;
        min-height: 50rem;
        background-repeat: no-repeat;
        background-position: top;
        background-size: contain;
        margin-top: 1.25rem;
        padding-top: 3rem;
    }

    .content .image{
        display:block;
        position: relative;
        width: 10rem;
        height: 10rem;
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        border-radius: 100%;
        box-shadow: 0 0 0.125rem 0.125rem var(--gray200);
        margin: 1rem auto;
    }

    .body{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin: 0 auto;
        min-width: 30rem;
        max-width: 50rem;
    }

    .text{
        display: flex;
        box-sizing: border-box;
        flex-direction: row;
        flex-wrap: wrap;
        width: calc(100% - 4.5rem);
        box-shadow: 0 0 0.065rem 0.0625rem var(--gray200);
        background-color: rgba(255, 255, 255, 0.90);
        padding: 2rem;
        border-radius: 1rem;
        margin-right: 1rem;
        align-items: flex-start;
        color: var(--gray400);
    }

    .text .profile{
        width: 10rem;
    }

    .text .profile .name{
        font-size: 2rem;
        font-weight: 600;
        margin-bottom: 1.5rem;
    }

    .text .profile .headline{
        font-size: 1rem;
        font-weight: 800;
        color: var(--gray300);
        margin-bottom: 1rem;
    }

    .text .profile .education{
        font-size: 0.875rem;
        font-weight: 400;
        color: var(--gray200);
        margin-bottom: 1rem;
    }

    .text .profile .link{
        font-size: 0.875rem;
        font-weight: 700;
        color: var(--gray300);
        margin-bottom: 1rem;
        text-decoration: underline;
        text-underline-offset: 0.25rem;
    }
    .text .profile .link:hover{
        color: var(--pink100);
    }




    .text .details{
        min-width: 20rem;
        box-sizing: border-box;
        width: calc(100% - 11rem) ;
        border-left: solid 0.0625rem var(--gray200);
        padding-left: 1rem;
        margin-left: 1rem;
    }

    .text .details div > .title{
        font-size: 1.5rem;
        font-weight: 500;
        color: var(--gray400);
        margin-bottom: 1rem;
    }


    .text .details .about p{
        font-size: 1.25rem;
        font-weight: 400;
        color: var(--gray300);
        line-height: 1.75rem;
    }


    .text .details .skills li{
        font-size: 1.25rem;
        font-weight: 500;
        color: var(--gray300);
        line-height: 1.75rem;
        list-style: square inside;
    }

    .text .details .experience ul{
        margin-bottom: 2rem;
    }

    .text .details .experience ul .title{
        font-size: 1rem;
        font-weight: 800;
        color: var(--gray400);
        margin-bottom: 0.5rem;
    }

    .text .details .experience ul .company{
        font-size: 0.875rem;
        font-weight: 400;
        color: var(--gray300);
        margin-bottom: 1rem;
    }

    .text .details .experience ul .description{
        font-size: 1.25rem;
        font-weight: 400;
        color: var(--gray300);
        line-height: 1.5rem;
        margin-bottom: 1rem;
    }


    /* -------------------------------------- */

    .switch{
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
    }

    .switch > *{
        box-shadow: 0 0 0.125rem 0.125rem var(--gray200);
        border-radius: 100%;
        cursor: pointer;
        width: 3.5rem;
        height: 3.5rem;
        text-align: center;
        line-height: 3.5rem;
        margin-bottom: 1rem;
        background-color: rgba(255, 255, 255, 0.8);
    }

    .switch .experience{
        font-weight: 900;
    }

    .switch > *:hover{
        box-shadow: 0 0 0.25rem 0.125rem var(--pink100);
    }

    .active{
        box-shadow: 0 0 0.125rem 0.125rem var(--pink100);
        color: var(--pink100);
    }

</style>