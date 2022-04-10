import { array } from 'prop-types'

export const productsArray = [
    {
        id: 1,
        name: 'iPhone 13 Pro',
        description: 'This is iPhone 13 Pro',
        capacity: 128,
        type: 'phone',
        price: 1100,
        image: '/images/iphone-black.jpg',
    },
    {
        id: 2,
        name: 'iPhone 12 Pro',
        description: 'This is iPhone 12 Pro',
        capacity: 128,
        type: 'phone',
        price: 2000,
        image: '/images/iphone-silver.jpg',
    },
    {
        id: 3,
        name: 'iPhone 13 Pro',
        description: 'This is iPhone 13',
        capacity: 128,
        type: 'phone',
        price: 1500,
        image: '/images/iphone-blue.jpg',
    },
    {
        id: 4,
        name: 'iPhone 10 Pro',
        description: 'This is iPhone 10 Pro',
        capacity: 128,
        type: 'phone',
        price: 1300,
        image: '/images/iphone.jpg',
    },
    {
        id: 5,
        name: 'iPhone 11 Pro',
        description: 'This is iPhone 11 Pro',
        capacity: 128,
        type: 'phone',
        price: 2000,
        image: '/images/iphone-black.jpg',
    },
    {
        id: 6,
        name: 'iPhone 11 Pro',
        description: 'This is iPhone 11 Pro',
        capacity: 128,
        type: 'phone',
        price: 2000,
        image: '/images/iphone-blue.jpg',
    },
]

export const getProductsObject = (array) => {
    return array.reduce(
        (obj, product) => ({
            ...obj,
            [product.id]: product,
        }),
        {}
    )
}
