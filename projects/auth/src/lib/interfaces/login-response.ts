export interface LoginResponse {
  status: boolean;
  code: number;
  payload: LoginPayload;
}

export interface LoginPayload {
  user: LoginUser;
  token: string;
}

export interface LoginUser {
  id: string;
  username: string;
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
  emailVerified: boolean;
  phoneVerified: boolean;
  role: string;
}