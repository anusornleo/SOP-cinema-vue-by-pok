<template>
  <!--หน้าComing soon-->
  <div >
    <div>
      <Header></Header>
    </div>

    <div class="container mx-auto px-4">
         <div class="my-3">
      <ul class="flex lg:w-1/2 lg:mx-auto xl:1/2 xl:mx-auto">
        <li class="flex-1 mr-2" @click="now">
          <a
            class="text-center block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4"
            href="#"
          >Now</a>
        </li>
        <li @click="coming" class="flex-1 mr-2">
          <a
            class="text-center block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white"
            href="#"
          >Coming Soon</a>
        </li>
        <li @click="theater" class="flex-1 mr-2">
          <a
            class="text-center block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4"
            href="#"
          >Theater</a>
        </li>
      </ul>
    </div>
      <!--title section-->
      <el-row>
        <el-col id="moviesection-title" :span="24">
          <h1>Coming Soon</h1>
        </el-col>
      </el-row>
      <!--selector section-->
      <!--movie section-->
      <div class="flex flex-wrap">
        <div
          class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 mb-4"
          v-for="item in movieList.comingSoonList"
          :key="item.movieId"
        >
          <MovieCard
            v-bind:title="item.movieTitle"
            v-bind:date="item.showDate"
            v-bind:picpath="item.movieThumbnails"
            class="movie-col"
          ></MovieCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MovieCard from "./MovieCard";
import json from "../assets/movielist.json";
import MovieSelector from "./MovieSelector";
import Header from "./Header";

import "../../node_modules/tailwindcss/base.css";
import "../../node_modules/tailwindcss/components.css";
import "../../node_modules/tailwindcss/utilities.css";
import "../../node_modules/tailwindcss/screens.css";
import "../../node_modules/tailwindcss/tailwind.css";

export default {
  name: "comingSoon",
  components: {
    MovieCard,
    MovieSelector,
    Header
  },
  data() {
    return {
      movieList: json
    };
  },
  methods:{
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
.movie-col {
  margin-bottom: 2em;
}

.movieselector-container {
  padding-top: 1em;
  padding-left: 10em;
  padding-right: 10em;
  padding-bottom: 2em;
}

#moviesection-title {
  text-align: center;
  color: #409eff;
}
</style>

