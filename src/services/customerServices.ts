import client from "./api-client";
import type { AxiosPromise } from "axios";

export interface RetrieveProfileResponse {
  id: number;
  profile: string;
  full_name: string;
  email: string;
  credit: number;
  designs_count: number;
  orders_count: number;
}

export interface RetrieveOrderDetailsResponse {
  current_count: number;
  canceled_count: number;
  completed_count: number;
  gallery_count: number;
  comment_count: number;
}

class CustomerService {
  retrieveProfile() {
    const controller = new AbortController();

    const request: AxiosPromise<RetrieveProfileResponse> = client.get(
      "profile/",
      {
        signal: controller.signal,
      },
    );

    return {
      request,
      cancel: () => controller.abort(),
    };
  }

  retrieveOrderDetails() {
    const controller = new AbortController();

    const request: AxiosPromise<RetrieveOrderDetailsResponse> = client.get(
      "profile/order-details/",
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

export default new CustomerService();
