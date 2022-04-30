import React from 'react'
import { keys } from 'lodash'
import {
    getProductsObject,
    productsArray,
} from 'components/products/productsArray'
import { CartProductListItem } from './CartProductListItem'
import { connect, useSelector } from 'react-redux'

export const CartProductList = ({
    productsInCart,
    productsObject = getProductsObject(productsArray),
    CartItem = CartProductListItem,
}) => {
    const productsArray = useSelector((state) => state.products)
    return (
        <>
            {keys(productsInCart).map((productId) => (
                <CartItem
                    key={productId}
                    product={productsObject[productId]}
                    productCount={productsInCart[productId]}
                />
            ))}
        </>
    )
}
