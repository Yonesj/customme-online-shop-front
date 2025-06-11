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
}

export default new CustomerService();
