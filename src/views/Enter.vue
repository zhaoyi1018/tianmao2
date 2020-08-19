<template>
  <div class="enterRouter">
    <!-- <img @click="enterBack" class="loginLeft-img-lj" src="../images/loginLeft-lj.png" alt=""> -->

    <div class="accoount-TBlogin-lj">淘宝账户登录</div>
    <div class="accoount-div1-lj"></div>
    <input
      v-model="msgName"
      v-if="show==true"
      class="accoount-name-lj"
      type="text"
      placeholder="手机号/邮箱/会员名"
    />
    <div class="accoount-name-lj" v-if="show==false">
      <span>+86</span>
      <img src="../images/upDown-lj.png" alt />
      <input type="text" placeholder="请输入手机号" />
    </div>
    <div v-if="show==true" class="accoount-password-lj">
      <input v-model="msgPassword" type="password" placeholder="请输入登录密码" />
      <img src="../images/enterEyes-lj.png" alt />
    </div>
    <div v-if="show==false" class="accoount-password-lj">
      <input type="password" placeholder="请输入验证码" />
      <span>获取验证码</span>
    </div>
    <div class="accoount-div2-lj"></div>
    <div class="accoount-login-lj">
      <div @click="enterBack" class="accoount-loginEnter-lj">登录</div>
      <div class="accoount-dxlogin-lj">
        <span v-if="show==true" @click="showBtn">短信验证码登录</span>
        <span v-if="show==false">免费注册</span>
        <span class="accoount-dxlogin-span2-lj" v-if="show==true">免费注册</span>
        <div @click="show2Btn" v-if="show==false">账号密码登录</div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data () {
    return {
      show:true,
      msgName: "",
      msgPassword: ""
    }
  },

  methods:{
    showBtn(){
      this.show = false;
    },

    show2Btn(){
      this.show = true;
    },

    enterBack() {
      if(this.msgName.trim() == ""){
        alert("用户名不能为空");
        this.msgName = "";
      }else if(this.msgName.trim() != "admin"){
        alert("用户名不正确");
        this.msgName = "";
      }else if(this.msgPassword.trim() == ""){
        alert("密码不能为空");
        this.msgPassword = "";
      }else if(this.msgPassword.trim() != "123456"){
        alert("密码不正确");
        this.msgPassword = "";
      }else if(this.msgName.trim() == "admin" && this.msgPassword.trim() == "123456"){
        this.$router.go(-1);
      }
    }
  }
};
</script>

<style scoped>
.enterRouter {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  z-index: 999;
  overflow: auto;
  display: flex;
  flex-direction: column;
}

.loginLeft-img-lj {
  position: absolute;
  left: 15px;
  top: 12px;
}

.accoount-TBlogin-lj {
  height: 44px;
  background: #f7f7f8;
  color: #000;
  border-bottom: 1px solid rgb(192, 192, 192);
  font-size: 17px;
  text-align: center;
  line-height: 45px;
}

.accoount-div1-lj {
  height: 20px;
  background: #f0f0f0;
}

.accoount-name-lj {
  line-height: 50px;
  padding-left: 15px;
  border: none;
  border-bottom: 1px solid #dddddd;
}

.accoount-name-lj span {
  font-size: 14px;
  line-height: 50px;
  color: #333;
}

.accoount-name-lj img {
  margin-left: 10px;
}

.accoount-name-lj input {
  margin-left: 5px;
  border: none;
}

.accoount-password-lj {
  line-height: 50px;
  position: relative;
  display: flex;
  align-items: center;
  border: none;
  border-bottom: 1px solid #dddddd;
}

.accoount-password-lj input {
  padding: 0 15px;
  border: none;
}

.accoount-password-lj span {
  position: absolute;
  right: 10px;
  margin-top: 1px;
  color: #ff0036;
}

.accoount-password-lj img {
  position: absolute;
  right: 10px;
}

.accoount-login-lj {
  height: 100%;
  padding: 0 10px 0 10px;
  background-color: #f0f0f0;
}

.accoount-loginEnter-lj {
  text-align: center;
  line-height: 45px;
  background: #ff0036;
  border-radius: 5px;
  color: #fff;
  margin-top: 15px;
  font-size: 16px;
}

.accoount-dxlogin-lj {
  padding: 15px 0 8px;
  color: #ff0036;
  font-size: 16px;
}

.accoount-dxlogin-span2-lj {
  float: right;
}

.accoount-dxlogin-lj div {
  width: 110px;
  height: 35px;
  line-height: 35px;
  border: 1px solid #ff0036;
  border-radius: 3px;
  text-align: center;
  margin: 7% auto;
}
</style>