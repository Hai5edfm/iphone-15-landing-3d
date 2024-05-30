import "./App.css"
import * as Sentry from "@sentry/react"
import { NavBar } from "./components/nav-bar"
import { Hero } from "./components/hero"
import { Highlights } from "./components/Highlights"
import { Model } from "./components/model"
import { Features } from "./components/features"
import { HowItWorks } from "./components/how-it-works"
import { Footer } from "./components/footer"

function App() {
	return (
		<main className="bg-black">
			<NavBar />
			<Hero />
			<Highlights />
			<Model />
			<Features />
			<HowItWorks />
			<Footer />
		</main>
	)
}

export default Sentry.withProfiler(App)
