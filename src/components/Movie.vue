<template>
  <!--ตัววนfor แสดงหนังทั้งหมดในหน้า home-->
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
            class="text-center block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-2 px-4"
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
          v-bind:id="item1.movieId"
          v-bind:title="item1.movieName"
          v-bind:date="item1.movieReleaseDate"
          v-bind:picpath="item1.movieThumbnail"
        ></MovieCard>
        <!-- <MovieCard
          v-else-if="value==item1.genre"
          v-bind:title="item1.movieName"
          v-bind:date="item1.movieReleaseDate"
          v-bind:picpath="item1.movieThumbnail"
        ></MovieCard> -->
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
      </div> -->
    </div>
  </div>
</template>

<script>
import axios from 'axios';

import MovieCard from "./MovieCard";
import json from "../assets/movielist.json";

import "../../node_modules/tailwindcss/base.css";
import "../../node_modules/tailwindcss/components.css";
import "../../node_modules/tailwindcss/utilities.css";
import "../../node_modules/tailwindcss/screens.css";
import "../../node_modules/tailwindcss/tailwind.css";

export default {
  name: "Movie",
  components: {
    MovieCard
  },
  data() {
    return {
      input: "",
      movieList: [],
      showtimeList:[],
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
      values: []
    };
  },
  async created() {
    // axios.get(`http://localhost:9000/api/showtime`)
    // .then(response => {
    //   // JSON responses are automatically parsed.
    //   this.movieList = response.data
    //   console.log(this.movieList)
    // })
    // .catch(e => {
    //   this.errors.push(e)
    // })

    // async / await version (created() becomes async created())
    //
    try {
      const response = await axios.get(`http://localhost:9000/api/movie`)
      this.movieList = response.data
      console.log(this.movieList)
    } catch (e) {
      this.errors.push(e)
    }
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
    loadAll() {
      for (var key in this.movieList.nowShowingList) {
        this.values.push({
          value: this.movieList.nowShowingList[key].movieTitle
        });
      }
      for (var key in this.movieList.comingSoonList) {
        this.values.push({
          value: this.movieList.comingSoonList[key].movieTitle
        });
      }
      return this.values;
    },
    querySearchAsync(queryString, cb) {
      var links = this.links;
      var results = queryString
        ? links.filter(this.createFilter(queryString))
        : links;

      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        cb(results);
      }, 3000 * Math.random());
    },
    createFilter(queryString) {
      return link => {
        return (
          link.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
        );
      };
    },
    handleSelect(item) {
      console.log(item);
    }
  },
  mounted() {
    this.links = this.loadAll();
  },
  computed: {
    movieSearchResult1() {
      return this.movieList.nowShowingList.filter(movie => {
        let searchtext = this.input.toLowerCase();
        let isintitle = movie.movieTitle.toLowerCase().includes(searchtext);
        return isintitle;
      });
    },
    movieSearchResult2() {
      return this.movieList.comingSoonList.filter(movie => {
        let searchtext = this.input.toLowerCase();
        let isintitle = movie.movieTitle.toLowerCase().includes(searchtext);
        return isintitle;
      });
    }
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