import { AppBar, Toolbar, IconButton, Typography, Button } from "@mui/material"
import { useNavigate } from "react-router-dom"
import { goToHomePage, goToCartPage } from "../router/coordinator"

export const Header = () => {

  const navigate = useNavigate()

  return(
    <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Button color="inherit" onClick={()=> goToHomePage(navigate)}>Codeby</Button>
          </Typography>
          <Button color="inherit" onClick={()=> goToCartPage(navigate)}>Carrinho</Button>
        </Toolbar>
      </AppBar>

  )
}


