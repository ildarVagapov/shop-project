import { Items } from "./Items"

const ItemsList = ({ items, addToCart }) => {
	return (
		<div className="items">
			{
				items.map((item) => {
					return (
						<Items key={item.id} {...item} addToCart={addToCart} />
					)
				})
			}
		</div>
	)
}

export { ItemsList }