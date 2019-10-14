<template>
  <!--หน้า now showing-->
  <div>
    <div>
      <Header></Header>
    </div>
    <div class="container mx-auto px-4">
      <!--name section-->

      <h1 id="moviesection-title">Now Showing</h1>
      <div class="flex flex-wrap">
        <div
          class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 mb-4"
          v-for="item in movieList.nowShowingList"
          :key="item.movieId"
        >
          <MovieCard
            v-bind:title="item.movieTitle"
            v-bind:date="item.showDate"
            v-bind:picpath="item.movieThumbnails"
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

export default {
  name: "NowShowing",
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

#nowshowing-main-container {
  padding-left: 10em;
  padding-right: 10em;
}

.movieselector-container {
  padding-top: 1em;
  padding-left: 10em;
  padding-right: 10em;
  padding-bottom: 2em;
}

#moviesection-title {
  font-size: 3rem;
  text-align: left;
  color: #409eff;
}
</style>
