import { createContext } from 'react'

const ShopContext = createContext()

const ContextProvider = ({ children }) => {
	const value = {
		example: 'hello context'
	}
	return (
		<ShopContext.Provider value={value}>
			{children}
		</ShopContext.Provider>
	)
}

export { ShopContext }
export { ContextProvider }