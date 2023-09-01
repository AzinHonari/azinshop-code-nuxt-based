<script setup>
    import { getBackinstockList} from '../modules/product/backInStockList'
    import {getSuggestionList} from '../modules/product/suggestionList'

    definePageMeta({
      layout: "home"
    });

</script>
<template>

    <Html lang='en-US'>
      <Title>AzinShop</Title>
      <Meta
        name="description"
        content="AzinShop sells shoes and bags"
      />
    </Html>
    

    <HomeTopfold></HomeTopfold>

    <div class="content">
      <div class="content-wrapper">

        <HomeSuggestion
        :products="getSuggestionList()"
        >
        </HomeSuggestion>

        <HomeBackInStock
        :products = "getBackinstockList()"
        >

        </HomeBackInStock>

      </div>
  </div>

</template>

<style scoped>

.content{
  background-color: white;
  width: 100%;
 }

.content-wrapper{
  /* width: 75rem; */
  margin: 0 auto;
  padding: 2rem 0;
}
</style>