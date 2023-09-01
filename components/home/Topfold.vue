<template>
  <div div class="top-fold-container">
  
    <div class="top-fold-image" >
      <div class="top-fold" style="background-image: url(img/main/topfold.jpg);"> </div>
      <div class="fade"></div>
      
      
    </div>

    

  </div>

  <div class="top-fold-text">
      <h2>Drawing design meets fashion.</h2>
      <h3>Atypical drawing goods</h3>
      <NuxtLink to="/products">Shop now</NuxtLink>
  </div>


</template>

<style scoped>
.top-fold-container{
  position: relative;
  /* padding-bottom:  calc(100vh - 13rem); */
  z-index: -1;
  overflow: hidden;
  
}

.top-fold-image{
  z-index: -1;
  overflow: hidden;
  min-height: 30rem;
  height: calc(100vh - 10rem);
  position: relative;
  
}
.top-fold{
  position: fixed;
  width: 100%;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  /* height: calc(100vh - 10rem); */
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;

}
.fade{
  position: fixed;
  width: 100%;
  left: 0;
  right: 0;
  /* height: calc(100vh - 10rem); */
  height: 100%;
  background-color: rgba(1,1,1,0.3);
  overflow: hidden;
  
}

.top-fold-text{
  position: absolute;
  width: 100%;
  top: calc(100vh - 25rem);
  left: 0;
  right: 0;
  /* height: calc(100vh - 19rem); */
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  /* margin-bottom: 6rem; */
  /* margin-top: calc(50% - 15rem); */
  color: white;
  text-align: center;
  font-size: 1.5rem;
  /* min-height: 30rem; */
  /* min-height: 26rem; */
  overflow: hidden;
}

.top-fold-text h2{
  font-size: 3.25rem;
  font-weight: 300;
  line-height: 4rem;
  text-shadow: 5px 0px 7px rgba(0,0,0,0.47);
}

.top-fold-text h3{
  line-height: 4rem;
  font-weight: 200;
  text-shadow: 5px 0px 7px rgba(0,0,0,0.47);
}

.top-fold-text a{
  font-size: 1.25rem;
  line-height: 2rem;
  font-weight: 200;
  border: solid white 0.0625rem;
  padding: 0.75rem 1.5rem;
  text-shadow: 5px 0px 7px rgba(0,0,0,0.47);
  box-shadow: -1px 1px 20px 0px rgba(0,0,0,0.34);
  transition: all 0.2s ease-in-out;
  width: fit-content;
}
.top-fold-text a:hover{
  box-shadow: 1px 3px 25px 5px rgba(0,0,0,0.37);
}



@media only screen and (max-width: 800px)  {
  .top-fold-container{
  padding-bottom: 0;
  height: 20rem;
  
}


.top-fold-image{
  min-height: 20rem;
  height: 20rem;
}

.top-fold{
  height: 100%;
  margin-top: 4rem;
  height: 20rem;  
}

.top-fold-text{
  top: 8rem;
  padding: 2rem;
  box-sizing: border-box;
}
.top-fold-text h2{
  font-size: 1.25rem;
  line-height: 2rem;
}

.top-fold-text h3{
  font-size: 1rem;
  line-height: 5rem;
}

.top-fold-text a{
  font-size: 1.125rem;
  line-height: 1.5rem;
  padding: 0.75rem 1rem;
}


  }
</style>