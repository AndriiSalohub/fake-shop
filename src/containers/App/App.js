import React, { useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import { Header } from 'containers/Header/Header'
import { Main } from 'containers/Main/Main'
import { Footer } from 'containers/Footer/Footer'
import { omit } from 'lodash'

export const App = () => {
    const [productsInCart, setProductsInCart] = useState({
        1: 2,
        2: 2,
    })

    const addProductToCart = (id, count) => {
        setProductsInCart((prevState) => ({
            ...prevState,
            [id]: (prevState[id] || 0) + count,
        }))
    }

    const removeProductFromCart = (productId) => {
        setProductsInCart((prevState) => {
            const prevProductsInCart = { ...prevState ё} //Object.assign({}, prevState)
            delete prevProductsInCart[productId]
            return prevProductsInCart
        })
    }

    return (
        <>
            <CssBaseline />
            <Header productsInCart={productsInCart} />
            <button onClick={() => removeProductFromCart(1)}>Delete</button>
            <Main
                addProductToCart={addProductToCart}
                productsInCart={productsInCart}
            />
            <Footer />
        </>
    )
}
