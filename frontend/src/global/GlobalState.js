import { useEffect, useState } from "react"
import { getAllProducts } from "../requests/getAllProducts"
import GlobalStateContext from "./GlobalStateContext"

export const GlobalState = (props) => {
  const [product, setProduct] = useState([])
  const [cart, setCart] = useState([])

  useEffect(() => {
    getAllProducts(setProduct)
  }, [])

  return(
    <GlobalStateContext.Provider value={{
      product, setProduct,
      cart, setCart
    }}>
      {props.children}
    </GlobalStateContext.Provider>
  )
}