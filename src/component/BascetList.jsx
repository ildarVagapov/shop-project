import { BascetItem } from "./BascetItem"

const BascetList = ({ order, handleBascet, removeFromeBascet, removeItem, addItem }) => {

	const totalPrice = order.reduce((sum, el) => {
		return sum + el.price * el.quantity
	}, 0)

	return (
		<ul className="collection bascet-collection">
			<li className="collection-item active">Корзина</li>
			{
				order.length ? order.map(item => {
					return <BascetItem key={item.id} {...item} addItem={addItem} removeItem={removeItem} removeFromeBascet={removeFromeBascet} />
				}) : <li className="collection-item">Корзина пуста</li>
			}
			<li className="collection-item active">Общая стоимость {totalPrice}</li>
			<span onClick={handleBascet} className="bascet-close">X</span>
		</ul>

	)
}

export { BascetList }
