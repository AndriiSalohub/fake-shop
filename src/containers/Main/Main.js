import React from 'react'
import { Container } from '@mui/material'
import { ProductList } from 'components/products/ProductsList'
import { Route, Routes } from 'react-router-dom'
import { CartPage } from 'pages/CartPage/CartPage'
import { PaymentPage } from 'pages/PaymentPage/Payment'
import { ShippingPage } from 'pages/ShippingPage/Shipping'
import CheckoutPage from 'pages/CheckoutPage/CheckoutPage'

export const Main = () => {
    return (
        <>
            <Container>
                <Routes>
                    <Route path="/" element={<ProductList />} />
                    <Route path="products" element={<ProductList />} />
                    <Route path="cart" element={<CartPage />} />
                    <Route path="payment" element={<PaymentPage />} />
                    <Route path="shipping" element={<ShippingPage />} />
                    <Route path="checkout" element={<CheckoutPage />} />
                </Routes>
            </Container>
        </>
    )
}
