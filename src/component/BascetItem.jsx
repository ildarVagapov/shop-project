const BascetItem = ({ name, id, price, quantity, removeFromeBascet }) => {
	const totalPrice = quantity * price

	return (
		<li class="collection-item bascet-item">
			{name} x <span className="add-goods">+</span> {quantity} <span className="remove-goodse">-</span>  ={totalPrice}
			<span onClick={() => removeFromeBascet(id)} className="bascet-remove">
				X
			</span>
		</li>
	)
}

export { BascetItem }