import { useEffect, useState } from "react"
import { API_KEY, API_URL } from '../config'
import { Preloader } from "./Preloader"
import { ItemsList } from "./ItemsList"
import { Cart } from "./Cart"
import { BascetList } from "./BascetList"

const Shop = () => {
	const [items, setItems] = useState([])
	const [loading, setLoading] = useState(true)
	const [order, setOrder] = useState([])
	const [isBascetShow, setIsBascetShow] = useState(false)

	useEffect(function getItems() {
		fetch(API_URL, {
			headers: { 'Authorization': API_KEY },
		}).then(response => response.json())
			.then((data) => {
				data.featured && setItems(data.featured)
				setLoading(false)
			})
	}, [])

	const addToCart = (item) => {
		const itemIndex = order.findIndex(orderItem => orderItem.id === item.id)

		if (itemIndex < 0) {
			const newItem = {
				...item,
				quantity: 1
			}
			setOrder([...order, newItem])
		} else {
			const newOrder = order.map((orderItem, i) => {
				if (itemIndex === i) {
					return {
						...orderItem,
						quantity: orderItem.quantity + 1
					}
				} else {
					return orderItem
				}
			})
			setOrder(newOrder)
		}
	}

	const handleBascet = () => {
		setIsBascetShow(!isBascetShow)
	}

	return (
		<main className="content container">
			<Cart quantity={order.length} handleBascet={handleBascet} />

			{loading ? <Preloader /> : <ItemsList items={items} addToCart={addToCart} />}

			{isBascetShow && <BascetList order={order} handleBascet={handleBascet} />}
		</main>
	)
}

export { Shop }