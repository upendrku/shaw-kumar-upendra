// import ReactDOM from 'react-dom/client'
// import Dashboard from './components/Dashboard'

// function App() {
//     return <Dashboard />
// }

// const root = ReactDOM.createRoot(document.getElementById('root'))

// root.render(<App />)

import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import Dashboard from './components/Dashboard'

const rootElement = document.getElementById("root")
const root = createRoot(rootElement)

root.render(
    <StrictMode>
        <Dashboard />
    </StrictMode>
)