import React, { useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import { Header } from 'containers/Header/Header'
import { Main } from 'containers/Main/Main'
import { Footer } from 'containers/Footer/Footer'
import { productsArray } from 'components/products/productsArray'

export const App = () => {
    const [productsInCart, setproductsInCart] = useState({
        1: 2,
        2: 2,
    })

    const addProductToCart = (id, count) => {
        setproductsInCart((prevState) => ({
            ...prevState,
            [id]: (prevState[id] || 0) + count,
        }))
    }

    return (
        <>
            <CssBaseline />
            <Header productsInCart={productsInCart} />
            <Main
                addProductToCart={addProductToCart}
                productsInCart={productsInCart}
            />
            <Footer />
        </>
    )
}
