import react, { useContext } from 'react';
import { ProdContainer, BuyButton, Container } from './styled';
import GlobalStateContext from '../../global/GlobalStateContext';


export const HomePage = () => {
  const { product, cart, setCart } = useContext(GlobalStateContext)

  const addToCart = (item) => {
    const newCart = [...cart, item]
    setCart(newCart)
  }

  const products = product && product.map((prod) => {
    let prodImgUrl
    let prodPrice
    const prodName = prod.productName
    const prodDetails = prod.items.map((e) => {
      e.images.map(e => {
        prodImgUrl = e.imageUrl
      })
      prodPrice = e.sellers[0].commertialOffer.Price
    })

    return (
      <ProdContainer key={prod.productId} className="oi">
        <div className='img-container'>
          <img src={prodImgUrl} />
        </div>
        <div className='info-container'>
          <div className='prod-details'>
            <b>{prodName}</b>
            <p>R$ {prodPrice}</p>
          </div>
          <BuyButton variant='contained'
            onClick={() => addToCart({name: prodName, img: prodImgUrl, price: prodPrice, id: prod.productId, quantity: 1})}>
            Comprar
          </BuyButton>
        </div>
      </ProdContainer>
    )
  })

  return (
    <Container>
      {products}
    </Container>
  )
}