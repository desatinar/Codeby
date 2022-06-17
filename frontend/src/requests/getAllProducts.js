import axios from "axios"

export const getAllProducts = (setData) => {
  axios.get("https://desatinar-codeby.herokuapp.com/")
    .then(res => setData(res.data))
    .catch(err => alert.log(err.message))
}