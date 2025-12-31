import { MenuItem } from "./MenuItem"

export const Menu = () => {

    const handleClick = (item, price) => {
        alert(`you have ordered ${item} for ${price}`)
    }

    return <div>
        <h2>Our Menu</h2>
        <MenuItem name = "pizza" price = {12} onOrder = {handleClick}/>
        <MenuItem name = "burger" price = {8} onOrder = {handleClick}/>
        <MenuItem name = "salad" price = {6} onOrder = {handleClick}/>
    </div>
}