import { Footer } from "./component/Footer";
import { Header } from "./component/Header";
import { Shop } from "./component/Shop";
import { ContextProvider } from "./context/context";


function App() {
	return (
		<>
			<Header />
			<ContextProvider>
				<Shop />
			</ContextProvider>
			<Footer />
		</>
	);
}

export { App }
