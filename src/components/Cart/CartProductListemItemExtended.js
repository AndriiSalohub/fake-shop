import { Delete } from '@mui/icons-material'

import { Button, Card, CardContent, Grid } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { Quantity } from 'components/Quantity/Quantity'
import React from 'react'
import { connect } from 'react-redux'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

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

const CartProductListItemExtended = ({
    product,
    productCount,
    removeProductFromCart,
    changeProductQuantity,
    isLiked = false,
    addLike,
    removeLike,
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
                    <Quantity
                        minCount={0}
                        count={productCount}
                        onDecrement={() => {
                            productCount === 1
                                ? removeProductFromCart(product.id)
                                : changeProductQuantity(
                                      product.id,
                                      productCount - 1
                                  )
                        }}
                        onIncrement={() =>
                            changeProductQuantity(product.id, productCount + 1)
                        }
                    />
                    <Button
                        variant="outlined"
                        onClick={() => removeProductFromCart(product.id)}
                    >
                        <Delete />
                    </Button>
                    <Button
                        variant="outlined"
                        onClick={() =>
                            isLiked
                                ? removeLike(product.id)
                                : addLike(product.id)
                        }
                    >
                        {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                    </Button>
                </CardContent>
            </Card>
        </Grid>
    )
}

const mapStateToProps = (state, { product }) => ({
    isLiked: state[product.id],
})

const mapDispatchToProps = (dispatch) => ({
    addLike: (id) =>
        dispatch({
            type: 'LIKE',
            id,
        }),
    removeLike: (id) =>
        dispatch({
            type: 'DISLIKE',
            id,
        }),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CartProductListItemExtended)
