import { axiosInstance } from "../libs/axios";

export type ResourceProduct = {
  id?: string;
  createdAt?: string;
  updatedAt?: string;

  name: string;
  description: string;
  image: string;
  category: string;
  price: number;

  isRecommended: boolean;
};

export type ResourceProducts = ResourceProduct[];

export async function apiGetProducts() {
  const response = await axiosInstance.get("/products");
  return response.data as ResourceProducts;
}

export async function apiGetRecommendedProducts() {
  // later will be using /products/recommended
  const response = await axiosInstance.get("/products");
  return response.data as ResourceProducts;
}

export async function apiGetProductsById(productsId: ResourceProduct["id"]) {
  const response = await axiosInstance.get(`products/${productsId}`);
  return response.data as ResourceProducts;
}
