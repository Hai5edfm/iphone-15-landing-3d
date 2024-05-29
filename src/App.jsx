import "./App.css"
import { NavBar } from "./components/nav-bar"
import { Hero } from "./components/hero"
import { Highlights } from "./components/highlights"

function App() {
	return (
		<main className="bg-black">
			<NavBar />
			<Hero />
			<Highlights />
		</main>
	)
}

export default App
