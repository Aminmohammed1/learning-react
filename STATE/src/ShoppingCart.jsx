import { useState } from "react"

export const ShoppingCart = () => {

//     const [cartItems, setCartItems] = useState({
//         reactCourse: 0,
//         vueCourse: 0,
//     })

//     const [prices, setPrices] = useState({
//         reactCourse: 49.99,
//         vueCourse: 39.99,
//     })

//     const handleReactAddToCart = () => {
//         if(cartItems.reactCourse < 5) {
//             console.log("react items...", cartItems.reactCourse)
//             setCartItems({...cartItems, reactCourse: cartItems.reactCourse + 1})        
//         }
//     }

//     const handleVueAddToCart = () => {
//         if(cartItems.vueCourse < 5){
//             setCartItems({...cartItems, vueCourse: cartItems.vueCourse + 1})
//         }
//     }

//     return (
//         <div>
//             <h2>Shopping Cart</h2>
//             <Product name = "React Course" price={prices.reactCourse} quantity={cartItems.reactCourse} addToCart={handleReactAddToCart} />
//             <Product name= "vue Course" price= {prices.vueCourse} quantity={cartItems.vueCourse} addToCart={handleVueAddToCart} />
//             <CartItem prices={prices} cartItems={cartItems}/>
//         </div>
//     )
// }

// export const CartItem = ({prices, cartItems}) => {
//     const totalQuantity = cartItems.reactCourse + cartItems.vueCourse;
//     const totalPrice = cartItems.reactCourse * prices.reactCourse + cartItems.vueCourse * prices.vueCourse;
//     return (
//         <div>
//             <h3>Cart Item</h3>
//             <p>Quantity : {totalQuantity}</p>
//             <p>Price: ${totalPrice.toFixed(2)}</p>
//         </div>
//     )
// }

// export const Product = ({ name, price, quantity, addToCart}) => {
//     return (
//         <div>
//             <h2>Product {name}</h2>
//             <p>price:${price}</p>
//             <p>quantity: {quantity}</p>
//             <button onClick={addToCart}>Add to Cart</button>
//         </div>
//     )


    const [prices, setPrices] = useState({
        reactCourse:49.99,
        vueCourse: 39.99
    })
    
    const [quantity, setQuantity] = useState({
        reactCourse:0,
        vueCourse:0
    })

    const handleRAddToCart = () => {
        if(quantity.reactCourse <5){
        return (
            setQuantity({
                ...quantity,
                reactCourse: quantity.reactCourse+1
            })
        )
    }
    }

    const handleVAddToCart = () => {
        if(quantity.vueCourse <5){

            return (
                setQuantity({
                    ...quantity,
                    vueCourse: quantity.vueCourse+1
                })
            )
        }
    }

    
    return <div>
        <Product name = "react" price={prices.reactCourse} addToCart={handleRAddToCart}></Product>
        <Product name = "vue" price={prices.vueCourse} addToCart={handleVAddToCart}></Product>
        <CartItems prices={prices} quantity={ quantity }></CartItems>
    </div>
}
    
    export const CartItems = ( { prices, quantity}) => {

        const totalPrice = prices.reactCourse * quantity.reactCourse + prices.vueCourse * quantity.vueCourse
        const totalQuantity = quantity.reactCourse+quantity.vueCourse

        return <div>
            <h2>Cart Value</h2>
            <p> Total Price is ${totalPrice.toFixed(2)} </p>
            <p>Total Quantity {totalQuantity}</p>
        </div>
    }

    export const Product = ( { name, price, addToCart} ) => {
        return <div>
            <h2>{name}</h2>
            <p>${price}</p>
            <button onClick={addToCart}>Add to Cart</button>
        </div>
    }