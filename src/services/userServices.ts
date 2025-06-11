// userServices.ts
import client from "./api-client";
import type { AxiosPromise, AxiosResponse } from "axios";

export interface SignUpPayload {
  full_name: string;
  national_id: string;
  education?: string;
  job?: string;
  email: string;
  password: string;
  birth_date: string;
}

export interface SignUpSuccessResponse {
  id: number;
  full_name: string;
  national_id: string;
  education: string;
  job: string;
  email: string;
  birth_date: string;
}

class UserService {
  signUp(data: SignUpPayload) {
    const controller = new AbortController();

    const request: AxiosPromise<SignUpSuccessResponse> = client.post(
      "auth/users/",
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

export default new UserService();
