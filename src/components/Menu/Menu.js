import React from 'react'
import { Button } from '@mui/material'
import { NavLink } from 'react-router-dom'

const setNavLinks = ({ isActive }) => (isActive ? 'nav-link' : '')

export const Menu = () => {
    return (
        <>
            <Button color="inherit">
                <NavLink className={setNavLinks} to="/">
                    Home
                </NavLink>
            </Button>
            <Button color="inherit">
                <NavLink className={setNavLinks} to="/products">
                    Products
                </NavLink>
            </Button>
            <Button color="inherit">
                <NavLink className={setNavLinks} to="/payment">
                    Payment
                </NavLink>
            </Button>
            <Button color="inherit">
                <NavLink className={setNavLinks} to="/shipping">
                    Shipping
                </NavLink>
            </Button>
            <Button color="inherit">
                <NavLink className={setNavLinks} to="/cart">
                    Cart
                </NavLink>
            </Button>
        </>
    )
}
