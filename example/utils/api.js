import Request from "./request";

const mRequest = new Request();

// 请求拦截器
mRequest.interceptors.request(request => {
  return request;
});

// 响应拦截器
mRequest.interceptors.response(response => {
  const res = response.data;

  // if the custom code is not 20000, it is judged as an error.
  if (res.code !== 20000) {
    uni.showToast({
      title: res.message || "Error",
      duration: 2000,
      icon: "none"
    });

    // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
    if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
      // to re-login
      uni
        .showToast({
          title: "您已登出，请重新登录",
          duration: 2000,
          icon: "none"
        })
        .then(() => {
          // 跳转到登录页面
          console.log('redirect to login')
        });
    }
    return Promise.reject(new Error(res.message || "Error")).catch(error => {
      console.log(error);
    })
  } else {
    return res;
  }
});

// 设置默认配置
mRequest.setConfig(config => {
  config.baseURL = "http://server-url";
  return config;
});

export default mRequest;
