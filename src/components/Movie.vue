<template>
  <!--ตัววนfor แสดงหนังทั้งหมดในหน้า home-->
  <div>
    <div v-if="isLoaded" class="container mx-auto px-4">
      <el-row class="movie-col">
        <el-col :span="12">
          <h1 :span="12" id="moviesection-title" style="float:left">Now Showing</h1>
        </el-col>

        <el-col>
          <el-input
            prefix-icon="el-icon-search"
            style="float:right; width:40%"
            placeholder="Search"
            v-model="input"
          ></el-input>
        </el-col>
      </el-row>
      <div class="flex flex-wrap">
        <div
          class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 mb-4"
          v-for="item1 in movieList"
          :key="item1.movieId"
        >
          <MovieCard
            v-if="value==''||value=='all'"
            v-bind:id="item1._id"
            v-bind:title="item1.movieName"
            v-bind:date="item1.movieReleaseDate"
            v-bind:picpath="item1.movieThumbnail"
          ></MovieCard>
          <!-- <MovieCard
          v-else-if="value==item1.genre"
          v-bind:title="item1.movieName"
          v-bind:date="item1.movieReleaseDate"
          v-bind:picpath="item1.movieThumbnail"
          ></MovieCard>-->
        </div>
        <!-- <div
        class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 mb-4"
        v-for="item2 in movieSearchResult2"
        :key="item2.movieId"
      >
        <MovieCard
          v-if="value==''||value=='all'"
          v-bind:title="item2.movieName"
          v-bind:date="item2.movieReleaseDate"
          v-bind:picpath="item2.movieThumbnail"
        ></MovieCard>
        <MovieCard
          v-else-if="value==item2.genre"
          v-bind:title="item2.movieName"
          v-bind:date="item2.movieReleaseDate"
          v-bind:picpath="item2.movieThumbnail"
        ></MovieCard>
        </div>-->
      </div>
    </div>
    <div v-if="!isLoaded" class="container mx-auto px-4">
      <h1>Loding...</h1>
    </div>
    <h1>{{username}}</h1>
    <form action="/saml/sp/logout" method="post">
      <input type="hidden" name="_csrf" value="a043f1e3-e40e-4a69-9550-3c24b89a88fc" />
      <input type="submit" value="Logout" />
    </form>
  </div>
</template>

<script>
import axios from "axios";

import MovieCard from "./MovieCard";
import json from "../assets/movielist.json";

import "../../node_modules/tailwindcss/base.css";
import "../../node_modules/tailwindcss/components.css";
import "../../node_modules/tailwindcss/utilities.css";
import "../../node_modules/tailwindcss/screens.css";
import "../../node_modules/tailwindcss/tailwind.css";

import Cookie from "js-cookie";
import VueCookies from 'vue-cookies'

export default {
  name: "Movie",
  components: {
    MovieCard
  },
  data() {
    return {
      input: "",
      movieList: null,
      showtimeList: [],
      options: [
        {
          value: "all",
          label: "All"
        },
        {
          value: "Adventure",
          label: "Adventure"
        },
        {
          value: "Action",
          label: "Action"
        },
        {
          value: "Horror",
          label: "Horror"
        },
        {
          value: "Animation",
          label: "Animation"
        },
        {
          value: "Biography",
          label: "Biography"
        }
      ],
      value: "",
      links: [],
      state4: "",
      timeout: null,
      values: [],
      fullscreenLoading: false,
      username: ""
    };
  },
  async created() {
    try {
      const response = await axios.get(
        `http://34.87.24.186:8080/movie/`
      );
      this.movieList = response.data;
    } catch (e) {
      console.log(e);
    }
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    axios
      .get(
        "http://34.87.24.186:8080/checkuser/"
      )
      .then(response => {
        this.username = response.data;
      })
      .catch(e => {
        console.error(e);
      });
      VueCookies.set('theme','default');
      
    console.log(this.cookies.get("jwt-token"));
  },
  methods: {
    handleSelect(item) {
      console.log(item);
    },
    testUser() {}
  },
  mounted() {
    // this.links = this.loadAll();
  },
  computed: {
    isLoaded() {
      if (this.hasOwnProperty("movieList") && this.movieList != null) {
        return true;
      }
      return false;
    },
    movieSearchResult1() {
      return this.movieList.filter(movie => {
        let searchtext = this.input.toLowerCase();
        let isintitle = movie.movieTitle.toLowerCase().includes(searchtext);
        return isintitle;
      });
    }
    // movieSearchResult2() {
    //   return this.movieList.comingSoonList.filter(movie => {
    //     let searchtext = this.input.toLowerCase();
    //     let isintitle = movie.movieTitle.toLowerCase().includes(searchtext);
    //     return isintitle;
    //   });
    // }
  }
};
</script>

<style scoped>
.movie-col {
  margin-bottom: 2em;
}
#moviesection-title {
  font-size: 3rem;
  text-align: left;
  color: #409eff;
}
</style>