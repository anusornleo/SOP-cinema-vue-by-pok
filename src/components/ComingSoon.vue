<template>
  <!--หน้าComing soon-->
  <div >
    <div>
      <Header></Header>
    </div>

    <div class="container mx-auto px-4">
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

