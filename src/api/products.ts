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
};

export type ResourceProducts = ResourceProduct[];

export async function apiGetProducts() {
  const response = await axiosInstance.get("/products");
  const products: ResourceProducts = response.data;
  return products;
}

export async function apiGetProductsById(productsId: ResourceProduct["id"]) {
  const response = await axiosInstance.get(`products/${productsId}`);
  const products: ResourceProducts = response.data;
  return products;
}

export async function apiGetProductImageById(
  productImageId: ResourceProduct["image"]
) {
  const response = await axiosInstance.get(`products/${productImageId}`);
  const products: ResourceProducts = response.data;
  return products;
}
