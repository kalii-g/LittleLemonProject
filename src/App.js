import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'
import BookingPage from './pages/BookingPage'
import HomePage from './pages/Home/HomePage'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" exact element={<HomePage />}></Route>
        <Route path="/book" exact element={<BookingPage />}></Route>
        <Route path="/confirmation" exact element={<>Success</>}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
