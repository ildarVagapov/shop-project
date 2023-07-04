import { useContext } from "react"
import { BascetItem } from "./BascetItem"
import { ShopContext } from "../context/context"

const BascetList = () => {

	const { order, handleBascet } = useContext(ShopContext)
	const totalPrice = order.reduce((sum, el) => {
		return sum + el.price * el.quantity
	}, 0)

	return (
		<ul className="collection bascet-collection">
			<li className="collection-item active">Корзина</li>
			{
				order.length ? order.map(item => {
					return <BascetItem key={item.id} {...item} />
				}) : <li className="collection-item">Корзина пуста</li>
			}
			<li className="collection-item active">Общая стоимость {totalPrice}</li>
			<span onClick={handleBascet} className="bascet-close">X</span>
		</ul>

	)
}

export { BascetList }
