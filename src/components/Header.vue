<template>
  <!--header ที่มีโลโก้อ่ะ-->
  <div>
    <!--logo and singin/signup Section-->

    <div>
      <img
        @click="goHome"
        class="m-5 sm:m-5 md:mx-auto lg:mx-auto"
        src="../assets/logo.png"
        width="150px"
      />
    </div>
    <h1>{{token}}</h1>
    <div class="absolute" style="top: 40px;
    right: 25px;">
      <el-button
        v-if="username == null"
        @click="loginClick"
        round
        icon="el-icon-circle-check-outline"
      >เข้าสู่ระบบ / สมัครสมาชิก</el-button>
      <el-button v-else @click="profileClick" round icon="el-icon-document">{{username}}</el-button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

import Cookie from "js-cookie";
import VueCookies from "vue-cookies";

import VueJwtDecode from "vue-jwt-decode";

export default {
  name: "Header",
  data() {
    return {
      activeIndex: "1",
      dialogFormVisible: false,
      loginState: JSON.parse(window.localStorage.getItem("loginstate")),
      username: "",
      token:""
    };
  },
  async created() {
    // VueCookies.set(
    //   "jwt-token",
    //   "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhbnVzb3JubGVvIiwiaWF0IjoxNTc0Nzg3MjYzfQ.IIGmYX9h7rqtPprsG97PoQAU8ILh-810EoKxWO-waa0"
    // );
    axios
      .get("http://34.87.24.186:8080/checkuser/")
      .then(response => {
        this.token = response.data
        this.username = $cookies.get("jwt-token");
        // this.username =
        //   "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhbnVzb3JubGVvIiwiaWF0IjoxNTc0Nzg3MjYzfQ.IIGmYX9h7rqtPprsG97PoQAU8ILh-810EoKxWO-waa0"
       console.log(this.username);
        if (this.username != null) {
          this.username = VueJwtDecode.decode(this.username).sub;
          console.log(this.username);
        }
      })
      .catch(e => {
        console.error(e);
      });
  },
  methods: {
    loginClick() {
      this.$router.push({ path: "/login" });
    },
    profileClick() {
      this.$router.push({ path: "/profile" });
    },
    // now() {
    //   this.$router.push({ path: "/nowshowing" });
    // },
    // coming() {
    //   this.$router.push({ path: "/comingsoon" });
    // },
    // theater() {
    //   this.$router.push({ path: "/theater" });
    // },
    goHome() {
      this.$router.push({ path: "/" });
    }
  }
};
</script>
<style scoped>
* {
  box-sizing: border-box;
}
.header-image-container {
  text-align: center;
}
.signin-signup-container {
  padding-top: 8px;
}
.head-menu {
}
</style>
