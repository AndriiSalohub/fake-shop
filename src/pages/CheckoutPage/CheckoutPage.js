import axios from 'axios'
import React, { useState } from 'react'
import './checkoutPage.css'
import { useSelector } from 'react-redux'
import { getProductsObject } from 'components/products/productsArray'
import { Link } from 'react-router-dom'

export const CheckoutPage = ({}) => {
    const productsArray = useSelector((state) => state.products)
    const productsObject = getProductsObject(productsArray)
    const productsInCart = useSelector((state) => state.productInCart)

    const total = Object.keys(productsInCart).reduce((total, productId) => {
        return (
            total + productsObject[productId].price * productsInCart[productId]
        )
    }, 0)

    const [checkoutPageInfo, setCheckoutPageInfo] = useState({
        name: '',
        address: '',
        isOrderSend: false,
    })

    const handleName = (e) => {
        setCheckoutPageInfo((prevState) => ({
            ...prevState,
            name: e.target.value,
        }))
    }

    const handleAddress = (e) => {
        setCheckoutPageInfo((prevState) => ({
            ...prevState,
            address: e.target.value,
        }))
    }

    const sendForm = (e) => {
        e.preventDefault()
        axios
            .post(
                'https://my-json-server.typicode.com/kznkv-skillup/server/orders',
                {
                    name: checkoutPageInfo.name,
                    address: checkoutPageInfo.address,
                }
            )
            .then((res) => res.data)
            .then(({ name, address }) =>
                setCheckoutPageInfo({
                    name,
                    address,
                    isOrderSend: true,
                })
            )
    }

    const renderForm = () => {
        return (
            <form onSubmit={(e) => sendForm(e)}>
                <div>
                    <input
                        type="text"
                        placeholder="Your name"
                        value={checkoutPageInfo.name}
                        onChange={(e) => handleName(e)}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="Your address"
                        value={checkoutPageInfo.address}
                        onChange={(e) => handleAddress(e)}
                    />
                </div>
                <button type="submit">Send</button>
            </form>
        )
    }

    const renderMessage = () => {
        const space = checkoutPageInfo.address.trim()
        if (total > 0) {
            return (
                <>
                    Dear, {checkoutPageInfo.name}, thanks for oreder, total cost
                    of which: {total} $!{' '}
                    <p>Address: {checkoutPageInfo.address}</p>{' '}
                </>
            )
        } else if (
            checkoutPageInfo.address === '' ||
            checkoutPageInfo.address === null ||
            checkoutPageInfo.address !== space
        ) {
            return (
                <>
                    Dear, {checkoutPageInfo.name}, thanks for oreder, but you
                    didn't write your address.
                    <p>Try it again.</p>
                    <button>
                        {' '}
                        <Link to="/cart" className="link">
                            Proceed to cart
                        </Link>
                    </button>
                </>
            )
        } else {
            return (
                <>
                    <p>
                        Dear, {checkoutPageInfo.name}, you didn't buy anything!
                    </p>
                    <p>Please, try again</p>
                </>
            )
        }
    }

    return (
        <>
            <h1>Checkout Page</h1>
            {checkoutPageInfo.isOrderSend !== true
                ? renderForm()
                : renderMessage()}
        </>
    )
}
