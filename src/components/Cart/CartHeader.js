import React, { useState } from 'react'
import { CartTotal } from './CartTotal'
import { CartProductList } from './CartProductList'
import { useSelector } from 'react-redux'

export const CartHeader = () => {
    const productsInCart = useSelector((state) => state.productInCart)
    return (
        <div>
            <CartProductList productsInCart={productsInCart} />
            <CartTotal productsInCart={productsInCart} />
        </div>
    )
}
