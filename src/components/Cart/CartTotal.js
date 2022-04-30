import React from 'react'
import { keys } from 'lodash'
import {
    getProductsObject,
    productsArray,
} from 'components/products/productsArray'

export const CartTotal = ({
    productsInCart,
    productsObject = getProductsObject(productsArray),
}) => {
    return (
        <div>
            Total:
            {keys(productsInCart).reduce((total, productId) => {
                return (
                    total +
                    productsObject[productId].price * productsInCart[productId]
                )
            }, 0)}
            $
        </div>
    )
}
