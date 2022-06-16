import axios from "axios"
import { headers } from "../constants/headers.js";
import { BASE_URL } from "../constants/url.js";

export const getAllProducts = async (req, res) => {
  try {
    const response = await axios.get(BASE_URL, headers);

    res.send(response.data);

  } catch (error) {
    res.status(404).send(error.message);
  };
};

