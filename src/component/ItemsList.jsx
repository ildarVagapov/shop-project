import { useContext } from "react"
import { Items } from "./Items"
import { ShopContext } from "../context/context"

const ItemsList = () => {
	const { items } = useContext(ShopContext)
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