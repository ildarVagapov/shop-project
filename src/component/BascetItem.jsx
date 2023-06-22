const BascetItem = ({ name, id, price, quantity }) => {
	return (
		<li class="collection-item">
			{name} x {quantity}={price}
		</li>
	)
}

export { BascetItem }