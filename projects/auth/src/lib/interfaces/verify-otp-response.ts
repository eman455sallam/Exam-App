export interface VerifyOtpResponse {
  status: boolean
  code: number
  message: string
}

export interface VerifyOtpPayload {
  message: string;
}
