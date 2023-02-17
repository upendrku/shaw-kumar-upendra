import ReactDOM from 'react-dom/client'
import Dashboard from './components/Dashboard'

function App() {
    return <Dashboard />
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<App />)