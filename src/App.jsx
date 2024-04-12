import { Outlet } from 'react-router-dom'
import './App.css'
import { StickyNavbar } from './components/Navbar/Navbar'
import { Toaster } from 'react-hot-toast'
function App() {


  return (
    <main className='min-h-screen max-h-screen  bg-center  bg-cover bg-no-repeat'
      style={{
        backgroundImage: `url('/banner-image-2.jpg')`,
      }}
    >
      <div className="overlay min-h-screen max-h-screen overflow-y-auto">
        <StickyNavbar />
        <Toaster />
        <Outlet />
      </div>
    </main>
  )
}

export default App
