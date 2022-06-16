import axios from "axios";
import { headers } from "../constants/headers.js";
import { BASE_URL } from "../constants/url.js";
import { mailTransporter } from "../services/mailTransporter.js";
import { sendToQueue, consume } from "../queue.js";

export const getProductByName = async (req, res) => {
  try {
    const name = req.query.name

    const response = await axios.get(`${BASE_URL}/${name}`, headers)

    let emailResponse
   
    if(!response.data[0]){
      emailResponse = "Não temos o item que você procurou :("
    } else {
      emailResponse = response.data[0].items[0].sellers[0].commertialOffer.AvailableQuantity
    }

    const mail = await mailTransporter.sendMail({
      from: `<${process.env.NODEMAILER_USER}>`,
      to: "rodrigosdn@gmail.com",
      subject: "Quantidade de itens no estoque da sua pesquisa",
      text: `Total de itens: ${emailResponse}`,
      html: `<p>Total de itens: ${emailResponse}<p>`
     })
    
    sendToQueue("codeby", mail)

    consume("codeby", message => {
      console.log(message.content.toString())
    })

    res.status(200).send(response.data)

  } catch (error) {
    res.status(404).send(error.message);
  }
}