<template>
  <view class="content">
    <image class="logo" src="/static/logo.png"></image>
    <view class="text-area">
      <text class="title">{{ title }}</text>
    </view>
  </view>
</template>

<script>
import { delUser, login } from "../../api/user";

export default {
  data() {
    return {
      title: "Hello"
    };
  },
  onLoad() {
    login({
      "phone_number": "123123123",
      "verification_code": "123321"
    }).then(response => {
      console.log(response);
    });

    delUser("token", 1,
      {
        info: "info"
      }).then(response => {
      console.log(response);
    });
  },
  methods: {}
};
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200 rpx;
  width: 200 rpx;
  margin-top: 200 rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50 rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36 rpx;
  color: #8f8f94;
}
</style>
