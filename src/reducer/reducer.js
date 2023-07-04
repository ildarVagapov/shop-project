import { ADD_ITEM, ADD_TO_CART, HANDLE_BASCET, REMOVE_FROME_BASCET, REMOVE_ITEM, SET_ITEMS } from "../context/context"

const reducer = (state, { type, payload }) => {

	switch (type) {
		case REMOVE_FROME_BASCET:
			return {
				...state,
				order: state.order.filter((el) => el.id !== payload.id)
			}
		case HANDLE_BASCET:
			return {
				...state,
				// isBascetShow: !true
				isBascetShow: !state.isBascetShow
			}
		case ADD_ITEM:
			return {
				...state,
				order: state.order.map(el => {
					if (el.id === payload.id) {
						return {
							...el,
							quantity: el.quantity + 1
						}
					} else {
						return el
					}
				})
			}
		case REMOVE_ITEM:
			return {
				...state,
				order: state.order.map(el => {
					if (el.id === payload.id) {
						return {
							...el,
							quantity: el.quantity > 0 ? el.quantity - 1 : 0
						}
					} else {
						return el
					}
				})
			}
		case ADD_TO_CART: {
			const itemIndex = state.order.findIndex(orderItem => orderItem.id === payload.id)

			let newOrder = null

			if (itemIndex < 0) {
				const newItem = {
					...payload,
					quantity: 1
				}
				newOrder = [...state.order, newItem]
			} else {
				newOrder = state.order.map((orderItem, i) => {
					if (itemIndex === i) {
						return {
							...orderItem,
							quantity: orderItem.quantity + 1
						}
					} else {
						return orderItem
					}
				})
			}

			return {
				...state,
				order: newOrder
			}
		}
		case SET_ITEMS:
			return {
				...state,
				items: payload || [],
				loading: false
			}
		// default: state
	}
}

export { reducer }