import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import HiddenSection from './components/HiddenSection'
import FetchComponent from './components/FetchComponent'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <HiddenSection /> */}
        <FetchComponent />
      </header>
    </div>
  )
}

export default App
