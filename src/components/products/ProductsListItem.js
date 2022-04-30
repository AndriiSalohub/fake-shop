import {
    Button,
    Card,
    CardActions,
    CardContent,
    TextField,
} from '@mui/material'
import React, { useState } from 'react'
import './ProductsListItem.css'
import PropTypes from 'prop-types'
import { Quantity } from 'components/Quantity/Quantity'
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { useDispatch, useSelector } from 'react-redux'

export const ProductsListItem = ({
    id,
    addProductToCart,
    name,
    description,
    type,
    capacity,
    price,
    image,
}) => {
    // const likedProducts = useSelector((state) => state)
    const [count, setCount] = useState(1)
    const onDecrement = () => {
        setCount(count - 1)
    }

    const onIncrement = () => {
        setCount(count + 1)
    }

    const dispatch = useDispatch()

    const isLiked = useSelector((state) => state.productsLikeState[id])

    const removeLike = (id) => {
        dispatch({
            type: 'DISLIKE',
            id,
        })
    }

    const addLike = (id) => {
        dispatch({
            type: 'LIKE',
            id,
        })
    }

    const productInCart = useSelector((state) => state.productInCart)

    const addToCart = (id, count) => {
        dispatch({
            type: 'ADD_PRODUCT_TO_CART',
            id,
            count,
        })
    }

    return (
        <>
            <Card>
                <CardContent>
                    <div className="product-img">
                        <img src={image} alt="" />
                    </div>
                    <Button
                        onClick={() => (isLiked ? removeLike(id) : addLike(id))}
                    >
                        {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                    </Button>

                    <h4>{name}</h4>
                    <p>{description}</p>

                    <div className="product-features">Type: {type}</div>
                    <div className="product-features">Capacity: {capacity}</div>
                    <div className="product-price">{price} $</div>
                    <Quantity
                        count={count}
                        onIncrement={onIncrement}
                        onDecrement={onDecrement}
                    />
                </CardContent>
                <CardActions className="wrap-btn-add-to-cart">
                    <Button
                        variant="outlined"
                        onClick={() => addToCart(id, count)}
                    >
                        Add to cart
                    </Button>
                </CardActions>
            </Card>
        </>
    )
}

ProductsListItem.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    type: PropTypes.string.isRequired,
    capacity: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string,
}

ProductsListItem.defaultProps = {
    description: 'No description...',
    image: '/images/noimage.jpg',
}
