import './App.css'
import Header from './compnents/Header'
import { Routes, Route } from 'react-router-dom'
import BookingPage from './pages/BookingPage'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" exact element={<>Home</>}></Route>
        <Route path="/book" exact element={<BookingPage />}></Route>
        <Route path="/confirmation" exact element={<>Success</>}></Route>
      </Routes>
    </>
  )
}

export default App
