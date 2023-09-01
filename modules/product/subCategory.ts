import { Category, BagCategory, ShoeCategory } from "@/data";

export const getShoeCategory = () => {
    return Object.values(ShoeCategory);
}

export const getBagCategory = () => {
    return Object.values(BagCategory);
}


export const getSubMenuItems = () => {

    const shoeCategory = getShoeCategory()
    const bagCategory = getBagCategory()

    const SubList: {menuNumber:number, url:string, name:string}[] = [];

    SubList.push({menuNumber:0, url: '/Shoes' , name: 'Shop all'});
    for (const key in shoeCategory) {
        SubList.push({menuNumber:0, url: `/${Category.SHOES}/${shoeCategory[key]}` , name: shoeCategory[key]});
    }

    SubList.push({menuNumber:1, url: '/Bags' , name: 'Shop all'});
    for (const key in bagCategory) {
        SubList.push({menuNumber:1, url: `/${Category.BAGS}/${bagCategory[key]}` , name: bagCategory[key]});
    }

    return SubList
}