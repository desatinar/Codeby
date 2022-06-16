import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Header } from "../components/Header"
import { CartPage } from "../pages/cartPage/CartPage"
import { HomePage } from "../pages/homePage/HomePage"

export const Router = () => {
  return(
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route exact path="/" element={<HomePage/>}/>
        <Route exact path="/cart" element={<CartPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}