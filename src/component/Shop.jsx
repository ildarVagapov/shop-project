import { useContext, useEffect } from "react"
import { API_KEY, API_URL } from '../config'
import { Preloader } from "./Preloader"
import { ItemsList } from "./ItemsList"
import { Cart } from "./Cart"
import { BascetList } from "./BascetList"
import { ShopContext } from "../context/context"

const Shop = () => {
	const { setItems, isBascetShow, loading } = useContext(ShopContext)

	useEffect(function getItems() {
		fetch(API_URL, {
			headers: { 'Authorization': API_KEY },
		}).then(response => response.json())
			.then((data) => {
				setItems(data.featured)
			})
	}, [])

	return (
		<main className="content container">
			<Cart />
			{loading ? <Preloader /> : <ItemsList />}
			{isBascetShow && <BascetList />}
		</main>
	)
}

export { Shop }