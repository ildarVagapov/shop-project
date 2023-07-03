import { ADD_ITEM, ADD_TO_CART, HANDLE_BASCET, REMOVE_FROME_BASCET, REMOVE_ITEM } from "../context/context"

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
				isBascetShow: !true
			}
		case ADD_ITEM:
			return {

			}
		case REMOVE_ITEM:
			return {

			}
		case ADD_TO_CART:
			return {

			}
		// default: state
	}
}

export { reducer }