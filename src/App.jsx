import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import News from './views/News'
import NotFound from './views/NotFound'
import NewsDetails from './views/NewsDetails'
import Contact from './views/Contact'
import { ArticleProvider } from '../src/components/NewsDetails/ArticleContext'
// import AutoScrollToTop from './components/generics/ScrollToTop'

function App() {

  return (
   <BrowserRouter>
    <ArticleProvider>
      {/* <AutoScrollToTop /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/articles/:id" element={<NewsDetails />} />
        <Route path='/news' element={<News />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </ArticleProvider>
   </BrowserRouter>
  )
}

export default App
