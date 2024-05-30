import "./App.css"
import { NavBar } from "./components/nav-bar"
import { Hero } from "./components/hero"
import { Highlights } from "./components/highlights"
import { Model } from "./components/model"
import * as Sentry from "@sentry/react"
import { Features } from "./components/features"

function App() {
	return (
		<main className="bg-black">
			<NavBar />
			<Hero />
			<Highlights />
			<Model />
			<Features />
		</main>
	)
}

export default Sentry.withProfiler(App)
