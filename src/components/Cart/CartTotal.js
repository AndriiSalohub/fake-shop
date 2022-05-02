import React from 'react'
import { keys } from 'lodash'
import { getProductsObject } from 'components/products/productsArray'
import { useSelector } from 'react-redux'

export const CartTotal = () => {
    const productsArray = useSelector((state) => state.products)
    const productsObject = getProductsObject(productsArray)
    const productsInCart = useSelector((state) => state.productInCart)

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
