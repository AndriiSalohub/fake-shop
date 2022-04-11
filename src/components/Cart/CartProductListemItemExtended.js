import React from 'react'

export const CartProductListItemExtended = ({ product, productCount }) => {
    return (
        <div>
            {product.name} :{productCount} : Extended
        </div>
    )
}
