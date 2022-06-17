import { Button } from "@mui/material"
import { useContext } from "react"
import GlobalStateContext from "../../global/GlobalStateContext"
import { Container, CartContainer, CheckoutContainer } from "./styled"

export const CartPage = () => {
  const { cart } = useContext(GlobalStateContext)

  let totalPrice = 0

  for (let i = 0; i < cart.length; i++) {
    totalPrice += cart[i].price
  }

  const products = cart.map((prod) => {
    return (
      <CartContainer>
        <div className='img-container'>
          <img src={prod.img} />
        </div>
        <div className='info-container'>
          <div className='prod-details'>
            <b>{prod.name}</b>
            <p>R$ {prod.price}</p>
          </div>
        </div>
      </CartContainer>
    )
  })


  return (
    <div>
      <Container>
        {products}
      </Container>
      <CheckoutContainer>
        <div className="checkout"> 
            <p><b>Total</b></p>
            <p><b>R$ {totalPrice}</b></p>
        </div>
        <div className="shipping">
            {totalPrice > 10
              ?
              <p>Parabéns, sua compra tem frete grátis!</p>
              :
              <></>
            }
          </div>
        <div className="button">
          <Button variant="contained">Finalizar Compra</Button>
        </div>
      </CheckoutContainer>
    </div>
  )
}