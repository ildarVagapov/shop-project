const Cart = (props) => {
	const { quantity } = props
	return (
		<div className="cart ">
			<i className="small material-icons  white-text">local_grocery_store</i>
			{quantity ? <span className="cart-quantity">{quantity}</span> : null}
		</div>
	)
}

export { Cart }

