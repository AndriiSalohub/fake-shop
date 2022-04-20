import { combineReducers } from 'redux'
import { cartReducer } from './cartReducer'
import { productsLikeReducer } from './productsLikeReducer'

export const rootReducer = combineReducers({
    productsLikeState: productsLikeReducer,
    productInCart: cartReducer,
})
