import axios from 'axios'
import React, { Component, useState } from 'react'

export const CheckoutPage = () => {
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
        return (
            <>
                Dear, {checkoutPageInfo.name}, thanks for oreder!{' '}
                <p>Address: {checkoutPageInfo.address}</p>{' '}
            </>
        )
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
