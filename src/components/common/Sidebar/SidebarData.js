import React from 'react';
import {MdKitchen, MdPersonOutline, MdShoppingBasket, MdRestaurant} from 'react-icons/md';

export const SidebarData = [
    {
        title : "냉장고",
        icon : <MdKitchen/>,
        link : "/fridge",
    },
    {
        title : "장바구니",
        icon : <MdShoppingBasket/>,
        link : "/basket",
    },
    {
        title : "레시피",
        icon : <MdRestaurant/>,
        link : "/recipe",
    },
    {
        title : "마이페이지",
        icon : <MdPersonOutline/>,
        link : "/my",
    },
]
