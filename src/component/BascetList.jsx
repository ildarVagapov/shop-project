import { BascetItem } from "./BascetItem"

const BascetList = ({ order, handleBascet }) => {
	return (
		<ul class="collection bascet-collection">
			<li class="collection-item active">Корзина</li>
			{
				order.length ? order.map(item => {
					return <BascetItem key={item.id} {...item} />
				}) : <li class="collection-item">Корзина пуста</li>
			}
			<li class="collection-item active">Общая стоимость</li>
			<span onClick={handleBascet} className="bascet-close">X</span>
		</ul>

	)
}

export { BascetList }
