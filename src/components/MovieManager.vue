<template>
  <div>
    <div v-if="username == 'adminmovie'" class="container mx-auto mx-4">
      <MovieList v-for="movie in movieList" :key="movie.id" :movie="movie" />
      <div class="my-3 max-w-sm w-full lg:max-w-full lg:flex shadow-lg">
        <div
          class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
          title="Woman holding a mug"
        >
          <img alt="Link Thumbnail not Collect" v-bind:src="addThumbnail" />
        </div>
        <div
          style="width: 100%;"
          class="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"
        >
          <div class="mb-1">
            <div class="md:flex md:items-center mb-1">
              <div class="md:w-1/6">
                <label
                  class="block text-gray-900 font-bold mb-1 md:mb-0"
                  for="inline-full-name"
                >Movie Name</label>
              </div>
              <div class="md:w-2/3">
                <input
                  v-model="addName"
                  class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white"
                  id="inline-full-name"
                  type="text"
                />
              </div>
            </div>
          </div>
          <div class="mb-1">
            <div class="md:flex md:items-center mb-1">
              <div class="md:w-1/6">
                <label
                  class="block text-gray-900 font-bold mb-1 md:mb-0"
                  for="inline-full-name"
                >Thumbnail URL</label>
              </div>
              <div class="md:w-2/3">
                <input
                  v-model="addThumbnail"
                  class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white"
                  id="inline-full-name"
                  type="text"
                />
              </div>
            </div>
          </div>
          <div class="mb-1">
            <div class="md:flex md:items-center mb-1">
              <div class="md:w-1/6">
                <label
                  class="block text-gray-900 font-bold mb-1 md:mb-0"
                  for="inline-full-name"
                >ReleaseDate</label>
              </div>
              <div class="md:w-2/3">
                <el-date-picker
                  v-model="addReleaseDate"
                  type="date"
                  placeholder="Pick a day"
                  format="dd-MM-yyyy"
                  value-format="dd-MM-yyyy"
                ></el-date-picker>
              </div>
            </div>
          </div>
          <div class="mb-1">
            <div class="md:flex md:items-center mb-1">
              <div class="md:w-1/6">
                <label
                  class="block text-gray-900 font-bold mb-1 md:mb-0"
                  for="inline-full-name"
                >Length</label>
              </div>
              <div class="md:w-2/3">
                <input
                  v-model="addLength"
                  class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white"
                  id="inline-full-name"
                  type="number"
                />
              </div>
            </div>
          </div>
          <div class="mb-1">
            <div class="md:flex md:items-center mb-1">
              <div class="md:w-1/6">
                <label
                  class="block text-gray-900 font-bold mb-1 md:mb-0"
                  for="inline-full-name"
                >Description</label>
              </div>
              <div class="md:w-2/3">
                <input
                  v-model="addDescription"
                  class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white"
                  id="inline-full-name"
                  type="text"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          class="lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
        >
          <div class="p-3">
            <button
              @click="addMovie"
              class="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >Add new Movie</button>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="container mx-auto mx-4">You can't view this page {{username}}</div>
  </div>
</template>

<script>
import axios from "axios";

import MovieList from "./MovieList";

import Cookie from "js-cookie";
import VueCookies from "vue-cookies";
import VueJwtDecode from "vue-jwt-decode";

export default {
  name: "MovieManager",
  components: {
    MovieList
  },
  data() {
    return {
      movieList: [],
      idList: [],
      number_of_movie: 0,
      addThumbnail: "",
      addName: "",
      addReleaseDate: "",
      addLength: "",
      addDescription: "",
      username: ""
    };
  },

  async created() {
    this.username = $cookies.get("jwt-token");
    if (!this.username.length == 0) {
      console.log(this.username);
      this.username = VueJwtDecode.decode(this.username).sub;
    }

    console.log("fect again");
    try {
      const response = await axios.get(`http://34.87.24.186:8080/movie`);
      this.movieList = response.data;
      console.log(this.movieList);
    } catch (e) {
      this.errors.push(e);
    }
  },
  methods: {
    addMovie() {
      axios
        .post("http://34.87.24.186:8080/movie", {
          movieName: this.addName,
          movieThumbnail: this.addThumbnail,
          movieReleaseDate: this.addReleaseDate,
          movieLength: this.addLength,
          movieDescription: this.addDescription
        })
        .then(response => {})
        .catch(e => {
          console.error(e);
        });
    }
  }
};
</script>

<style scoped>
</style>