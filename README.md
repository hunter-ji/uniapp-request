## uniapp request



## 介绍

本项目借鉴项目[134355/min-request](https://github.com/134355/min-request)的网络请求代码。

本项目根据该项目的网络请求二次开发，分离接口，按需引入。在于解决uniapp项目网络请求问题，统一管理请求、拦截和接口。

在本项目最新的更新中更改了原有的参数传入方式，实现了自动添加参数功能。



## 使用

1. 项目中加入utils/

   ```bash
   mv utils <your-project>
   ```

2. 在main.js中引入

   ```javascript
   import request from "./utils/request";
   Vue.use(request);
   ```

3. 修改服务请求地址

   ```javascript
   // utils/api.js
   
   mRequest.setConfig(config => {
     config.baseURL = "http://server-url";
     return config;
   });
   ```

   * 开发时此处可使用环境变量来切换环境

4. 创建api文件夹

   ```bash
   mkdir api
   ```

5. 在api/下创建接口文件

   以用户登录为例，文件名为`user.js`

   ```javascript
   import request from "../utils/api";
   
   export function login(data) {
     return request.post({
     	url: "/user/login",
       data: data
     })
   }
   ```

6. 页面中请求

   ```vue
   <template>
   	...
   </template>
   
   <script>
   import { login } from "../../api/user";
   
   export default {
   	methods: {
   		login({
   			phone_number: "123123123",
   			"verify_code": "123123"
   		}).then(response => {
   			console.log(response.data);
   		})
   	}
   }
   </script>
   ```

   

## 更多请求方式

* 添加多个参数，如`token`等

  ```javascript
  import request from "../utils/api";
  
  export function delUser(token, uid, data) {
    return request.post({
    	url: "/user/login",
      data: data,
      params: {token, uid}
    })
  }
  ```

  ```javascript
  ...
  deluser(
  	"假装是一个token", // token
    12, //uid
    {	// 这里只是为了演示强行加入data
      username: "kuari",
      password: "adminadmin"
    }
  )
  ...
  ```

  