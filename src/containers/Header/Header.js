import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { Container } from '@mui/material'
import { Menu } from 'components/Menu/Menu'
import CartHeader from 'components/Cart/CartHeader'
import { Link } from 'react-router-dom'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    logo: {
        textDecoration: 'none',
        color: 'white',
        '&:hover': {
            textDecoration: 'underline',
        },
    },
})

export const Header = ({ productsInCart }) => {
    const classes = useStyles()
    return (
        <>
            <AppBar position="static">
                <Container>
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1 }}
                        >
                            <Link className={classes.logo} to="/">
                                {' '}
                                Fake Shop{' '}
                            </Link>
                        </Typography>
                        <Menu />
                        <CartHeader productsInCart={productsInCart} />
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    )
}
