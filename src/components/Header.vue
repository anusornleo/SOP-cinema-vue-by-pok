<template>
  <!--header ที่มีโลโก้อ่ะ-->
  <div>
    <!--logo and singin/signup Section-->

    <div>
      <img class="m-5 sm:m-5 md:mx-auto lg:mx-auto" src="../assets/logo.png" width="150px" />
    </div>
    <div class="absolute" style="top: 40px;
    right: 25px;">
      <el-button
        v-if="!this.loginState"
        @click="loginClick"
        round
        icon="el-icon-circle-check-outline"
      >เข้าสู่ระบบ / สมัครสมาชิก</el-button>
      <el-button
        v-if="this.loginState"
        @click="profileClick"
        round
        icon="el-icon-document"
      >ข้อมูลส่วนตัว</el-button>
    </div>

    <!--menu Section-->

 

    <!-- <ul class="flex lg:w-1/3 lg:mx-auto xl:1/3 xl:mx-auto">
      <li class="flex-1 mr-2" @click="now">
        <a
          class="text-center block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white"
          href="#"
        >Now</a>
      </li>
      <li @click="coming" class="flex-1 mr-2">
        <a
          class="text-center block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4"
          href="#"
        >Coming Soon</a>
      </li>
      <li @click="theater" class="flex-1 mr-2">
        <a class="text-center block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4" href="#">Theater</a>
      </li>
    </ul>-->
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      activeIndex: "1",
      dialogFormVisible: false,
      loginState: JSON.parse(window.localStorage.getItem("loginstate"))
    };
  },
  methods: {
    loginClick() {
      this.$router.push({ path: "/login" });
    },
    profileClick() {
      this.$router.push({ path: "/profile" });
    },
    now() {
      this.$router.push({ path: "/nowshowing" });
    },
    coming() {
      this.$router.push({ path: "/comingsoon" });
    },
    theater() {
      this.$router.push({ path: "/theater" });
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
