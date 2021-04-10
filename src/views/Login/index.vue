<template>
  <div class="loginFormWrapper">
    <van-form @submit="onSubmit" class="loginForm">
      <van-field
        v-model="username"
        name="username"
        label="用户名"
        placeholder="用户名"
        :border="true"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :border="true"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { get, post } from "common/axios";
import { mapActions } from "vuex";
export default {
  name: "login",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  mounted() {
    console.log(sceneParams);
  },
  methods: {
    // ...mapActions({
    //   updateCommonParams:"updateCommonParams",
    //   updar:"base/updar"
    // }),
    ...mapActions(["updateCommonParams", "base/updar"]),
    onSubmit(values) {
      // this.updateCommonParams("1");
      // this["base/updar"]("111");
      console.log(values);
      let params = {
        url: "/app",
        params: values,
      };
      // console.log(axios);
      // console.log(get);
      get(params).then((res) => {
        console.log(111);
      });
    },
  },
};
</script>

<style lang="less" scoped>
.loginFormWrapper {
  height: 100%;
  flex-wrap: wrap;
  align-items: center;
  display: flex;
  .loginForm {
    width: 100%;
  }
}
</style>