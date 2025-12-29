export const ProductList = () => {
    const products = [{id: 1, name: "laptop", price:299}, {id: 2, name: "phone", price: 499}, {id: 3, name: "HeadPhones", price:199}, {id:4, name: "watch", price: 199}]

    const productElements = products.filter((product) => {return product.price > 199}).map((product) => {
                return (
                        <div key= {product.id}>
                            <h3>name: {product.name}</h3>
                            <p>id: {product.id}</p>
                            <p>price: {product.price}</p>
                        </div>
                )
           })  ;

    return (
        <div>
            <h2> Our Products </h2>
           {productElements}
            
        </div>
    )
} 