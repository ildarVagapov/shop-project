import { useContext } from "react"
import { ShopContext } from "../context/context"

const Cart = () => {
	const { order, handleBascet } = useContext(ShopContext)
	const quantity = order.length

	return (
		<div className="cart " onClick={handleBascet}>
			<i className="small material-icons  white-text">local_grocery_store</i>
			{quantity ? <span className="cart-quantity">{quantity}</span> : null}
		</div>
	)
}

export { Cart }

