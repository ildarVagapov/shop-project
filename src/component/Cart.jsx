const Cart = ({ quantity, handleBascet }) => {
	return (
		<div className="cart " onClick={handleBascet}>
			<i className="small material-icons  white-text">local_grocery_store</i>
			{quantity ? <span className="cart-quantity">{quantity}</span> : null}
		</div>
	)
}

export { Cart }

