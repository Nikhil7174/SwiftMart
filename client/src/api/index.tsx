import axios from "axios";

const url = "http://localhost:5000/api/products";

export const fetchProducts = (): Promise<any> => axios.get(url);
