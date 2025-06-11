// userServices.ts
import client from "./api-client";
import type { AxiosPromise } from "axios";

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

export interface LoginPayload {
  email: string;
  password: string;
}

export interface LoginSuccessResponse {
  access: string;
  refresh: string;
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

  login(data: LoginPayload) {
    const controller = new AbortController();

    const request: AxiosPromise<LoginSuccessResponse> = client.post(
      "auth/jwt/create/",
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
