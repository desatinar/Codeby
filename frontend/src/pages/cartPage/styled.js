import styled from "styled-components"

export const Container = styled.div`
  display: flex ;
  height: 70vh;
  overflow-x: auto;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 780px;
  margin: auto;
`

export const CheckoutContainer = styled.div`

.shipping{
    display: flex ;
    flex-direction: column;
    align-items: center;
  }

  .checkout{
    display: flex ;
    justify-content: space-around;
    margin-left: 6vw;
    margin-right: 5vw;

    .total{
      display: flex;
    }
  }

  .button{
    display: flex ;
    align-items: center;
    flex-direction: column;
  }
`

export const CartContainer = styled.div`
  display: flex;
  margin-left: 20px;
  margin-top: 30px;
  width: 350px ;
  

  img{
    border: 2px solid #BEBEBE;
    width: 150px;
    height: 100px;
    padding-top: 20px;
    padding-bottom: 20px;
}

  .info-container{
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

  .prod-details{
    display: flex;
    flex-direction: column;
  
  p{
    font-weight: 500;
  }
}

`