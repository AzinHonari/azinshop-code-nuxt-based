<script setup>
    const props = defineProps(["showMenu"])
    const emits = defineEmits(["toggle"])

    const mainCategory = useMainCategory().value
    const subCategory = useSubCategory().value
    const subList = ref([])

    const toggleIt = () =>{
        emits("toggle")
    }

    const showMain = ref(true)
     const showSub = ref(false)

    const menuItemClick = (col, index) => {

        subList.value = []
        for (const key in subCategory) {
            const element = subCategory[key];
            if( subCategory[key].menuNumber == index ){
                subList.value.push(element)
                
            }
        }

        showMain.value = false
        showSub.value = true
     }

     const backHere = () => {
        showMain.value = true
        showSub.value = false
     }

</script>

<template>
    <Teleport to="body">
        <Transition>
            <div class="container" v-show="showMenu" >
                <div class="main-menu" v-show="showMain">
                    <ul class="menu-body">
                        <li 
                            v-for="(col,index) in mainCategory" 
                            :key="col" 
                            @click="menuItemClick(col,index)"
                            >
                                <span>{{col}}</span>
                                <span class="icon-arrow-right"></span>
                        </li>

                        <li  @click="toggleIt">
                            <nuxt-link to="/lookbook">
                                <span>Lookbook</span>
                            </nuxt-link>
                        </li>
                    </ul>
                    <div class="bottom-section">
                        <NuxtLink 
                            class="icon-user-fill login" 
                            to="/user"
                            @click="toggleIt">
                            <span>Login</span>
                        </NuxtLink>
                        <ul class="social">
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
                <div class="sub-menu" v-show="showSub">
                    <HeaderMobileSubMenu 
                        v-show="true" 
                        :items= subList
                        @back = "backHere"
                        @toggle = "toggleIt">
                    </HeaderMobileSubMenu>
                </div>
            </div>
        </Transition>

    </Teleport>
</template>

<style scoped>

    .v-enter-active, .v-leave-active {
    transition: all 0.5s ease-out;
    }

    .v-enter-from, .v-leave-to {
        transform: translateX(-100%);
    }


    .container{
        box-sizing: border-box;
        display: none;
        position: fixed;
        top: 4rem;
        bottom: 0;
        left: 0;
        right: 2rem;
        z-index: 1;
        background-color: white;
        box-shadow: 0 0.125rem 0.25rem 0.0125rem var(--gray200);
        
    }

    .main-menu{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
    }

    .menu-body{
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        padding-top: 3rem;
    }

    .menu-body li{
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        box-sizing: border-box;
        padding: 1rem 2rem;
        font-size: 1.25rem;
        color: var(--gray300);
    }

    .menu-body li:nth-of-type(2n + 1){
        background-color: var(--gray500);
    }


    /********************************* */

    .sub-menu{
        width: 100%;
    }
    /********************************* */

    .bottom-section{
        box-sizing: border-box;
        padding: 2rem;
        background-color: var(--gray500);
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
    }

    .login{
        margin-bottom: 3rem;
        color: var(--gray300);
    }

    .login span{
        margin-left: 0.75rem;
    }

    .social{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }

    .social li{
        margin-right: 2rem;
        color: var(--black100);
        font-size: 1rem;
    }

    @media only screen and (max-width: 800px)  {
        .container{
            display: flex;
        }
    }

</style>