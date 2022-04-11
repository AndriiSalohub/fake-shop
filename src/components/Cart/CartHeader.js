import React, { useState } from 'react'
import {
    productsArray,
    getProductsObject,
} from 'components/products/productsArray'
import { CartTotal } from './CartTotal'
import { CartProductList } from './CartProductList'

export const CartHeader = ({
    productsInCart,
    productsObject = getProductsObject(productsArray),
}) => {
    return (
        <div>
            <CartProductList productsInCart={productsInCart} />
            <CartTotal productsInCart={productsInCart} />
        </div>
    )
}
