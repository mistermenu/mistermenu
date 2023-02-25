import { axiosInstance } from "../libs/axios";

export type ResourceProduct = {
  id: string;
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

export async function apiGetProductById(productId: ResourceProduct["id"]) {
  const response = await axiosInstance.get(`/products/${productId}`);
  return response.data as ResourceProduct;
}
