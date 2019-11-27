<template>
  <!--หน้า login-->
  <div id="login-container">
    <el-header>
      <Header></Header>
    </el-header>
    <el-main>
      <el-row type="flex" justify="center">
        <el-col :span="6" class="cardform-container">
          <el-card class="card-container">
            <a href="http://34.87.24.186:8080/login" target="_blank">
              <el-button @click="goLoginBy" type="success">Login by</el-button>
            </a>
          </el-card>
        </el-col>
      </el-row>
    </el-main>
  </div>
</template>

<script>
import Header from "./Header";
import axios from "axios";
import Cookie from "js-cookie";
import VueCookies from "vue-cookies";
import VueJwtDecode from "vue-jwt-decode";

export default {
  name: "Login",
  components: {
    Header
  },
  data() {
    return {
      username: ""
      // userData: JSON.parse(window.localStorage.getItem("user"))
    };
  },
  methods: {
    goLoginBy() {
      // VueCookies.set('jwt-token','1s');
      // console.log(this.username)
      // this.username = '7777'
      // axios
      //   .get("http://34.87.24.186:8080/login/")
      //   .then(response => {
      //   })
      //   .catch(e => {
      //     console.error(e);
      //   });
      // VueCookies.set(
      //   "jwt-token",
      //   "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhbnVzb3JubGVvIiwiaWF0IjoxNTc0Nzg3MjYzfQ.IIGmYX9h7rqtPprsG97PoQAU8ILh-810EoKxWO-waa0"
      // );
    },
    getUsername() {
      $cookies.get("jwt-token");
    },
    onSubmit() {
      if (
        this.form.username == this.userData.username &&
        this.form.password == this.userData.password
      ) {
        console.log("pass");
        window.localStorage.setItem("loginstate", true);
        this.$router.push({ path: "/" });
      } else {
        this.$notify.error({
          title: "การเข้าสู่ระบบผิดพลาด",
          message: "ชื่อผู้ใช้ หรือ รหัสผ่านไม่ถูกต้อง",
          position: "top-left"
        });
        console.log("no");
      }
    },
    onCancel() {
      this.$router.push({ path: "/" });
    },
    registerClick() {
      this.$router.push({ path: "/register" });
    }
  }
  // watch: {
  //   getUsername: function() {
  //     // $cookies.get("jwt-token")
  //     console.log($cookies.get("jwt-token"))
  //   }
  // },
};
</script>

<style scoped>
.cardform-container {
  text-align: center;
}

.card-container {
  width: 25em;
}
</style>
