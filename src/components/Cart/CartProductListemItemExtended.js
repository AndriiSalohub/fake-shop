import { Delete } from '@mui/icons-material'

import { Button, Card, CardContent, Grid } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { Quantity } from 'components/Quantity/Quantity'
import React from 'react'

const useStyles = makeStyles({
    media: {
        width: 150,
        height: 'auto',
        marginRight: 15,
    },
    cardWrap: {
        display: 'flex',
        padding: 15,
    },
})

export const CartProductListItemExtended = ({
    product,
    productCount,
    removeProductFromCart,
}) => {
    const classes = useStyles()
    return (
        <Grid item xs={12} sm={6}>
            <Card className={classes.cardWrap}>
                <div>
                    <img className={classes.media} src={product.image} />
                </div>
                <CardContent>
                    <div>{product.name}</div>
                    <div>Price for one item: {product.price}</div>
                    <div>Count: {productCount}</div>
                    <Quantity count={productCount} />
                    <Button
                        variant="outlined"
                        onClick={() => removeProductFromCart(product.id)}
                    >
                        <Delete />
                    </Button>
                </CardContent>
            </Card>
        </Grid>
    )
}
