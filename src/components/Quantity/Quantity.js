import React from 'react'
import { Button, TextField } from '@mui/material'

export const Quantity = ({ onDecrement, onIncrement, count }) => {
    return (
        <div className="product-quantity">
            <Button
                variant="contained"
                onClick={() => onDecrement()}
                disabled={count <= 1}
            >
                -
            </Button>
            <TextField size="small" value={count} />
            <Button
                variant="contained"
                onClick={() => onIncrement()}
                disabled={count >= 10}
            >
                +
            </Button>
        </div>
    )
}
