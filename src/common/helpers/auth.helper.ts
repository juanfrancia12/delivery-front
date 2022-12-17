import { token } from "@constants/global.constant"
// import jwt_decode from "jwt-decode"

// export const getToken = "token"
export const Token = !(token === null) || false
// export const Token = !(token === null) || false

// export const getToken = jwt_decode(token as string)

export const setToken = (token: string): void =>
  localStorage.setItem("visionaryAPP", token)

export const removeToken = (): void => localStorage.removeItem("visionaryAPP")
