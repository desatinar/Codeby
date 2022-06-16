import { app } from "./app.js";
import { getAllProducts } from "./endpoint/getAllProducts.js"
import { getProductByName } from "./endpoint/getProductByName.js";

app.get("/", getAllProducts)
app.get("/search", getProductByName)
