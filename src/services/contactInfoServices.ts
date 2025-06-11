import client from "./api-client";
import type { AxiosPromise } from "axios";

export interface RegisterContactInfoPayload {
  user: number;
  phone: string;
  home_number?: string;
  province: string;
  city: string;
  postal_code: string;
  address: string;
}

class ContactInfoService {
  registerContactInfo(data: RegisterContactInfoPayload) {
    const controller = new AbortController();

    const request: AxiosPromise = client.post(
      "auth/users/contact-info/",
      data,
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

export default new ContactInfoService();
