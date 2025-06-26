import client from "./api-client";
import type { AxiosPromise } from "axios";

export interface ProductCardInterface {
  id: number;
  thumbnail: string;
  title: string;
  description: string;
  price: number;
}

class ProductService {
  retrieveLikedProducts() {
    const controller = new AbortController();

    const request: AxiosPromise<ProductCardInterface[]> = client.get(
      "products/likes/",
      {
        signal: controller.signal,
      },
    );

    return {
      request,
      cancel: () => controller.abort(),
    };
  }
}

export default new ProductService();
