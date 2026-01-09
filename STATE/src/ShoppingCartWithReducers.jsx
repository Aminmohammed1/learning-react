import { useReducer } from "react";

const ADD_ITEM = "ADD_ITEM"

const initialState = {
    items: [], // id name price quantity
    totalAmount: 0,
    totalItems: 0,
};

const reducer = (state, action) => {
    switch(action.type){
        case ADD_ITEM : {
            const existingItem = state.items.findIndex(
                item => item.id === action.payload.id
            )
            let updatedItems;
            if (existingItem >= 0){
                updatedItems = state.items ;
            }
        }
            
    }
}

export const ShoppingCartWithReducers = () => {
    const products = [
        { id: 1, name: 'Product 1', price: 100 },
        { id: 2, name: 'Product 2', price: 200 },
        { id: 3, name: 'Product 3', price: 300 },
    ];

    const [count, dispatch] = useReducer(reducer , initialState);
    
    return (
        <div> Products {products.map(product => 
            <div key={product.id}>
                <h3>{product.name}</h3>
                <p>Price: {product.price}</p>
                <button onClick={() => dispatch({type: 'ADD_ITEM', payload: product})}>Add to Cart</button>
            </div>
        )}</div>
    )
}