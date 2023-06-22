import { BascetItem } from "./BascetItem"

const BascetList = ({ order, handleBascet, removeFromeBascet }) => {

	const totalPrice = order.reduce((sum, el) => {
		return sum + el.price * el.quantity
	}, 0)

	return (
		<ul class="collection bascet-collection">
			<li class="collection-item active">Корзина</li>
			{
				order.length ? order.map(item => {
					return <BascetItem key={item.id} {...item} removeFromeBascet={removeFromeBascet} />
				}) : <li class="collection-item">Корзина пуста</li>
			}
			<li class="collection-item active">Общая стоимость {totalPrice}</li>
			<span onClick={handleBascet} className="bascet-close">X</span>
		</ul>

	)
}

export { BascetList }
