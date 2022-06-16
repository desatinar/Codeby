import react, { useEffect, useState } from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { ProdContainer, BuyButton, Container } from './styled';
import { getAllProducts } from '../../requests/getAllProducts';
import { AppBar } from '@mui/material';
import { useNavigate } from 'react-router-dom';


export const HomePage = () => {
  const [products, setProducts] = useState("")

  useEffect(() => {
    getAllProducts(setProducts)
  }, [])

  const navigate = useNavigate()

  const productsImg = products && products.map((prod) => {
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
          <BuyButton variant='contained'>Comprar</BuyButton>
        </div>
      </ProdContainer>
    )
  })

  return (
    <div>
      <Container>
        {productsImg}
      </Container>
    </div>
  )
}