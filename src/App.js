import React from "react"
import { HashRouter } from "react-router-dom"
import Router from "./Routes/Router"
import "./App.css"
import { Provider } from "./Context"
import CommingSoon from "./component/CommingSoon/CommingSoon"

function App() {
  // Using user agent to detect user's device
  const ua = navigator.userAgent.toLowerCase()
  if (/mobile|android|iphone|ipad|phone/i.test(ua)) {
    return <CommingSoon></CommingSoon>
  }
  return (
    <Provider>
      <HashRouter>
        <div id="App">
          <Router />
        </div>
      </HashRouter>
    </Provider>
  )
}

export default App
