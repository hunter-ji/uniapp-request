import request from "../utils/api";

export function login(data) {
  return request.post(
    "/usr/login",
    data
  )
}
