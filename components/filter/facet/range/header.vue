<template>

    <div class="header">
        <span>The highest price is 1200</span>
        <button class="reset">Reset</button>
    </div>
    
</template>

<style scoped>
.header{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
}

.reset{
    outline: none;
    background-color: white;
    border: none;
    cursor: pointer;
    text-decoration: underline;
    text-underline-offset: 0.25rem;
}
</style>
