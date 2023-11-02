import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import News from './views/News'
import NotFound from './views/NotFound'
import Service from './views/NewsDetails'
import Contact from './views/Contact'

function App() {


  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/newsdetails' element={<Service />} />
      <Route path='/news' element={<News />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
   </BrowserRouter>
  )
}

export default App
