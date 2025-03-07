import { Routes, Route } from 'react-router'
import Home from './page/Home'
import Navbar from './components/Navbar'

export default function App() {
  return (
    <div className="app container mx-auto">
      <Navbar />
      <div className="pages mt-8">
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    </div>
  )
}
