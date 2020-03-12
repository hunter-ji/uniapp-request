import request from "../utils/api";

export function login(data) {
  return request.post({
    url: "/user/login",
    data: data
  })
}

export function delUser(token, uid, data) {
  return request.delete({
    url: "/user/delete",
    data: data,
    params: {token, uid}
  })
}
