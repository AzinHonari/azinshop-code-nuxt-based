import {Card, products, Category, ShoeCategory} from '@/data'

export const getAllShoes = () => {
    const arr : Card[] = []

    products.filter(item => {
        return item.category === Category.SHOES
    }).map( item => {
        
        arr.push({
            id : item?.id,
            name : item?.name, 
            price : item?.stockStatus.find( x => x.color === item?.image[0].color)?.price, 
            image : item?.image[0].url,
            category : item?.category,
            subCategory : item?.subCategory                
        })        
    })

    return arr  
}

export const getShoesByCategory = (shoeCategory:ShoeCategory) => {

    return products
    .filter(item => {
        return item.category === Category.SHOES && item.subCategory === shoeCategory
    }).map( item => {
        return {
            id : item?.id,
            name : item?.name, 
            price : item?.stockStatus.find( x => x.color === item?.image[0].color)?.price, 
            image : item?.image[0].url,
            category : item?.category,
            subCategory : item?.subCategory
        }
    })

}

export const getShoeById = (shoeCategory:ShoeCategory, id:number) => {

    return products
    .filter(item => {
        return item.category === Category.SHOES 
    }).filter(item => {
        return item.subCategory === shoeCategory
    }).filter(item => {
        return item.id === id
    }).map( item => item )

}

