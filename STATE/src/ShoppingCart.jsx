import { useState } from "react"

export const ShoppingCart = () => {

    const [cartItems, setCartItems] = useState({
        reactCourse: 0,
        vueCourse: 0,
    })

    const [prices, setPrices] = useState({
        reactCourse: 49.99,
        vueCourse: 39.99,
    })

    const handleReactAddToCart = () => {
        console.log("react items...", cartItems.reactCourse)
        setCartItems({...cartItems, reactCourse: cartItems.reactCourse + 1})        
    }

    const handleVueAddToCart = () => {
        setCartItems({...cartItems, vueCourse: cartItems.vueCourse + 1})
    }

    return (
        <div>
            <h2>Shopping Cart</h2>
            <Product name = "React Course" price={prices.reactCourse} quantity={cartItems.reactCourse} addToCart={handleReactAddToCart} />
            <Product name= "vue Course" price= {prices.vueCourse} quantity={cartItems.vueCourse} addToCart={handleVueAddToCart} />
            <CartItem prices={prices} cartItems={cartItems}/>
        </div>
    )
}

export const CartItem = ({prices, cartItems}) => {
    const totalQuantity = cartItems.reactCourse + cartItems.vueCourse;
    const totalPrice = cartItems.reactCourse * prices.reactCourse + cartItems.vueCourse * prices.vueCourse;
    return (
        <div>
            <h3>Cart Item</h3>
            <p>Quantity : {totalQuantity}</p>
            <p>Price: ${totalPrice}</p>
        </div>
    )
}

export const Product = ({ name, price, quantity, addToCart}) => {
    return (
        <div>
            <h2>Product {name}</h2>
            <p>price:${price}</p>
            <p>quantity: {quantity}</p>
            <button onClick={addToCart}>Add to Cart</button>
        </div>
    )
}