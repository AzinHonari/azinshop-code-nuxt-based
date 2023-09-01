<template>

    <ul class="container">

        <li class="option">
            <input class="option-check" type="checkbox">
            <div class="option-content">
                <span>price</span>
                <span>(5)</span>
            </div>
        </li>
        
    </ul>

</template>

<style scoped>
.container{
    display: flex;
    flex-direction: column;
}

.option{
    cursor: pointer;
    padding: 0.5rem 0;
    font-size: 1rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
}

.option-check{
    margin-right: 0.5rem;
}
.option-content > *{
    margin-right: 0.25rem;
}
</style>