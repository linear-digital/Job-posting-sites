import {Outlet} from 'react-router-dom'
import './App.css'
import { StickyNavbar } from './components/Navbar/Navbar'

function App() {


  return (
    <main>
      <StickyNavbar />
      <Outlet />
    </main>
  )
}

export default App
