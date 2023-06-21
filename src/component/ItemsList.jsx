import { Items } from "./Items"

const ItemsList = (props) => {
	const { items } = props

	return (
		<div className="items">
			{
				items.map((item) => {
					return (
						<Items key={item.id} {...item} />
					)
				})
			}
		</div>
	)
}

export { ItemsList }