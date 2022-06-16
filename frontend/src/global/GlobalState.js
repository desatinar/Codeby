import { useState } from "react"
import GlobalStateContext from "./GlobalStateContext"

export const GlobalState = (props) => {
  const [prod, setProd] = useState([])
  const [cart, setCart] = useState([])
  
  
  
  
  return(
    <GlobalStateContext.Provider value={{
      prod, setProd,

    }}>
      {props.children}
    </GlobalStateContext.Provider>
  )
}