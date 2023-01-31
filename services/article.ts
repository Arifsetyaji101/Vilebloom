import axios from "axios";

const ROOT_API = process.env.NEXT_PUBLIC_API;

export async function getArticle() {
  const URL = "api/articles";

  const response = await axios.get(`${ROOT_API}/${URL}`);
  const axiosResponse = response.data;

  return axiosResponse.data;
}

export async function getDetailArticle(id: any) {
  const URL = `api/articles/${id}`;

  const response = await axios.get(`${ROOT_API}/${URL}`);
  const axiosResponse = response.data;

  return axiosResponse.data;
}
