import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./index.css"

//...
import * as Sentry from "@sentry/react"

Sentry.init({
	dsn: "https://86def0b1fd298956a0e80637d1c52549@o4507341454245888.ingest.us.sentry.io/4507341457784832",
	integrations: [
		Sentry.browserTracingIntegration(),
		Sentry.reactRouterV6BrowserTracingIntegration({
			useEffect: React.useEffect,
		}),
		Sentry.replayIntegration(),
	],
	tracesSampleRate: 1.0,
	tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
	replaysSessionSampleRate: 0.1,
	replaysOnErrorSampleRate: 1.0,
})

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)
