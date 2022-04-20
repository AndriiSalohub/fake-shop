import React from 'react'
import { CartTotal } from 'components/Cart/CartTotal'
import { CartProductList } from 'components/Cart/CartProductList'
import CartProductListItemExtended from 'components/Cart/CartProductListemItemExtended'
import { Grid } from '@mui/material'
import { connect } from 'react-redux'

const CartPage = ({
    productsInCart,
    removeProductFromCart,
    changeProductQuantity,
}) => {
    return (
        <>
            <h1>Cart</h1>
            <Grid container spacing={3}>
                <CartProductList
                    productsInCart={productsInCart}
                    CartItem={CartProductListItemExtended}
                    removeProductFromCart={removeProductFromCart}
                    changeProductQuantity={changeProductQuantity}
                />
            </Grid>

            <CartTotal productsInCart={productsInCart}></CartTotal>
        </>
    )
}

const mapStateToProps = (state) => ({
    productsInCart: state.productInCart,
})

export default connect(mapStateToProps)(CartPage)
