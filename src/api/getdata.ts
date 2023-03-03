import axios from "axios";

export async function getData() {
  const baseUrl = " https://dev.whenisthenextmcufilm.com/api";

  const response = await axios.get(baseUrl);

  return response.data;
}
