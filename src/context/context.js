import { createContext, useReducer } from 'react'
import { reducer } from '../reducer/reducer'

// ТИПЫ ДЛЯ ДИСПАТЧ
export const REMOVE_FROME_BASCET = 'REMOVE_FROME_BASCET'
export const HANDLE_BASCET = 'HANDLE_BASCET'
export const ADD_ITEM = 'ADD_ITEM'
export const REMOVE_ITEM = 'REMOVE_ITEM'
export const ADD_TO_CART = 'ADD_TO_CART'

const ShopContext = createContext()

const initialState = {
	items: [],
	loading: true,
	order: [],
	isBascetShow: false
}



const ContextProvider = ({ children }) => {
	const [value, dispatch] = useReducer(reducer, initialState)

	value.removeFromeBascet = (itemId) => {
		dispatch({ type: REMOVE_FROME_BASCET, payload: { id: itemId } })
	}

	value.handleBascet = () => {
		dispatch({ type: HANDLE_BASCET })
	}

	value.addItem = (itemId) => {
		dispatch({ type: ADD_ITEM, payload: { id: itemId } })
	}

	value.removeItem = (itemId) => {
		dispatch({ type: REMOVE_ITEM, payload: { id: itemId } })
	}

	value.addToCart = (item) => {
		dispatch({ type: ADD_TO_CART, payload: { item: item } })
	}

	return (
		<ShopContext.Provider value={value}>
			{children}
		</ShopContext.Provider>
	)
}

export { ShopContext }
export { ContextProvider }