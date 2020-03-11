## uniapp request



## 介绍

本项目使用的项目[134355/min-request](https://github.com/134355/min-request)的网络请求代码，更多介绍请看原项目。

本项目根据该项目的网络请求二次开发，分离接口，按需引入。在于解决uniapp项目网络请求问题，统一管理请求、拦截和接口。



## 使用

1. 项目中加入utils

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
     return request.post(
       "/usr/login",
       data
     )
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

   