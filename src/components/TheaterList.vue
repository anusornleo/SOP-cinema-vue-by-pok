<template>
  <!--หน้าเลือกโรงที่มี 2 โรง-->
  <div id="theaterlist-container">
    <div>
      <Header></Header>
    </div>
    <ul class="flex lg:w-1/2 lg:mx-auto xl:1/2 xl:mx-auto">
      <li class="flex-1 mr-2" @click="now">
        <a
          class="text-center block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4"
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
        <a
          class="text-center block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white"
          href="#"
        >Theater</a>
      </li>
    </ul>
    <el-main id="theaterlist-main-container">
      <el-row v-for="item in theaterList" :key="item.cineplexId">
        <el-col :span="24">
          <el-card :body-style="{ padding: '0px' }" class="theater-card">
            <img v-bind:src="item.cineplexBanner" style="width: 100%; height: 300px;" class="image" />
            <el-button
              type="primary"
              icon="el-icon-location"
              style="width: 100%; margin-top: -1em;"
              @click="theaterSelect(item.cineplexId)"
            >Select Theater</el-button>
          </el-card>
        </el-col>
      </el-row>
    </el-main>
  </div>
</template>

<script>
import Header from "./Header";
import json from "../assets/theater.json";

export default {
  name: "TheaterList",
  components: {
    Header
  },
  methods: {
    now() {
      this.$router.push({ path: "/nowshowing" });
    },
    coming() {
      this.$router.push({ path: "/comingsoon" });
    },
    theater() {
      this.$router.push({ path: "/theater" });
    },
    theaterSelect(cineplexId) {
      this.$router.push({ name: "Theater", params: { id: cineplexId } });
    }
  },
  data() {
    return {
      theaterList: json.cineplexList
    };
  }
};
</script>

<style scoped>
#theaterlist-main-container {
  padding-left: 10em;
  padding-right: 10em;
}

.theater-card {
  margin-bottom: 2em;
}
</style>
