import axios from "axios";

const url = "http://localhost:4000/api/products";

export const fetchProducts = (): Promise<any> => axios.get(url);
