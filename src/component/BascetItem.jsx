import { useContext } from "react"
import { ShopContext } from "../context/context"


const BascetItem = ({ name, id, price, quantity, removeFromeBascet, removeItem, addItem }) => {
	const totalPrice = quantity * price

	const { example } = useContext(ShopContext)
	console.log(example)

	return (
		<li className="collection-item bascet-item">
			{name} <button type="submit" className="remove-goodse" onClick={() => removeItem(id)}>-</button> {quantity} <button type="submit" className="add-goods" onClick={() => addItem(id)}>+</button> = {totalPrice}
			<span onClick={() => removeFromeBascet(id)} className="bascet-remove">
				X
			</span>
		</li>
	)
}

export { BascetItem }