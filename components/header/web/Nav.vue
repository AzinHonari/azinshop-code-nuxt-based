<script setup>
    import {MenuDirection} from '@/rules'


    const props = defineProps({
        direction: String
    })

    const activeMenu = ref("")
    const leftPosition = ref('0')
    const subList = ref([])
    const componentRef = ref()
    const showSubMenu=ref(false)

    const mainCategory = useMainCategory().value
    const subCategory = useSubCategory().value

    const arrowClass = (col) => {
        if(props.direction === MenuDirection.HORIZONTAL){
            if(col === activeMenu.value) return "icon-keyboard_arrow_up"
        else return "icon-keyboard_arrow_down"
        }
    }

    
    useClickOutside(componentRef, () => { 
        showSubMenu.value=false

    })

    const menuItemClick = (col, index) => {
        showSubMenu.value= !showSubMenu.value
        activeMenu.value = col

        if (index == 0) {
            leftPosition.value= '5.5rem'
        }
        else if (index == 1) {
            leftPosition.value= '10rem'
        }


        subList.value = []
        for (const key in subCategory) {
            const element = subCategory[key];
            if( subCategory[key].menuNumber == index ){
                subList.value.push(element)
                
            }
        }
     }
     
</script>
<template>
        <ul 
            :style="direction === MenuDirection.HORIZONTAL ? {flexDirection:'row'} : {flexDirection:'column'}"
            class="main-menu"
            ref="componentRef">

            <li 
                v-for="(col, index) in mainCategory" 
                :key="col" 
                @click="menuItemClick(col, index)"
                >
                <nuxt-link 
                active-class="active"
                :to="direction === MenuDirection.VERTICAL ? `/${col}` : ``"
                >
                    <span>{{col}}</span>
                    <span 
                    :class="arrowClass(col)"
                    ></span>
                </nuxt-link>

                <HeaderWebSubMenu 
                v-show="direction === MenuDirection.HORIZONTAL && showSubMenu" 
                :items= subList
                :leftPosition="leftPosition">
                </HeaderWebSubMenu>
            </li>

            <li>
                <nuxt-link 
                to="/lookbook"
                active-class="active"
                @click="activeMenu ='lookbook'"
                >
                <span>Lookbook</span>
                </nuxt-link>
            </li>
        </ul>
</template>


<style scoped>


    a{
        text-decoration: none;
        display: block;
        color: var(--gray200);
        display: inline-block;
        cursor: pointer;
    }

    .main-menu{
        display: flex;
    }

    .main-menu li{
        list-style: none;
        display: block;
    }


    .main-menu li a{
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



    .main-menu li a span:first-of-type:hover{
        text-decoration: underline;
        text-underline-offset: 0.25rem;
        color: var(--gray300);
        font-weight: 500;
    }

    .main-menu li .active{
        color: var(--pink100);
    }

    .main-menu li .active span:first-of-type{
        color: var(--pink100);
        text-decoration: underline;
        text-underline-offset: 0.3125rem;
    }




</style>modules/data