import { Button } from "@mui/material"
import styled from "styled-components"


export const BuyButton = styled(Button)`
  height: 40px;
  width: 140px ;
  padding: 6px 16px;

`
export const Container = styled.div`
  display: flex ;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1130px;
  margin: auto;
`

export const ProdContainer = styled.div`
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