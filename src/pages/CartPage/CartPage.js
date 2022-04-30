import React from 'react'
import { CartTotal } from 'components/Cart/CartTotal'
import { CartProductList } from 'components/Cart/CartProductList'
import { CartProductListItemExtended } from 'components/Cart/CartProductListemItemExtended'
import { Grid } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './cartPage.css'
export const CartPage = () => {
    const dispatch = useDispatch()
    const productsInCart = useSelector((state) => state.productInCart)

    return (
        <>
            <h1>Cart</h1>
            <Grid container spacing={3}>
                <CartProductList
                    productsInCart={productsInCart}
                    CartItem={CartProductListItemExtended}
                />
            </Grid>

            <CartTotal productsInCart={productsInCart}></CartTotal>
            <Link to="/checkout" className="link-proceed">
                Proceed to checkout
            </Link>
        </>
    )
}
