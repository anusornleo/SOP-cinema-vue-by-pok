<template>
  <div class="container mx-auto mx-4">
    {{username}}
    <ShowtimeList
      v-for="(showtime,index) in datashowtime"
      :key="showtime.id"
      :datamovie="datamovie"
      :showtime="showtime"
      :datatheater="datatheater"
      :index="index"
    />
    <div class="my-3 max-w-sm w-full lg:max-w-full lg:flex shadow-lg">
      <div
        class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
        title="Woman holding a mug"
      >
        <!-- <img alt="Link Thumbnail not Collect" v-bind:src="addThumbnail" /> -->
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
              <div class="inline-block relative w-64">
                <select
                  class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                  v-model="movieSelected"
                >
                  <option disabled value>Select Movie</option>
                  <option
                    v-for="option in movieOptions"
                    :key="option.id"
                    :value="option.value"
                  >{{option.text}}</option>
                </select>
                <div
                  class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
                >
                  <svg
                    class="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mb-1">
          <div class="md:flex md:items-center mb-1">
            <div class="md:w-1/6">
              <label
                class="block text-gray-900 font-bold mb-1 md:mb-0"
                for="inline-full-name"
              >Theater</label>
            </div>
            <div class="md:w-2/3">
              <div class="inline-block relative w-64">
                <select
                  class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                  v-model="theaterSelected"
                >
                  <option disabled value>Select Theater</option>
                  <option
                    v-for="option in theaterOptions"
                    :key="option.id"
                    :value="option.value"
                  >{{option.text}}</option>
                </select>
                <div
                  class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
                >
                  <svg
                    class="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mb-1">
          <div class="md:flex md:items-center mb-1">
            <div class="md:w-1/6">
              <label class="block text-gray-900 font-bold mb-1 md:mb-0" for="inline-full-name">Date</label>
            </div>
            <div class="md:w-2/3">
              <!-- <input
                v-model="addDate"
                class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white"
                id="inline-full-name"
                type="text"
              />-->
              <el-date-picker
                v-model="addDate"
                type="date"
                placeholder="Pick a day"
                format="dd-MM-yyyy"
                value-format="dd-MM-yyyy"
                :picker-options="pickerOptions"
              >></el-date-picker>
            </div>
          </div>
        </div>
        <div class="mb-1">
          <div class="md:flex md:items-center mb-1">
            <div class="md:w-1/6">
              <label class="block text-gray-900 font-bold mb-1 md:mb-0" for="inline-full-name">Time</label>
            </div>
            <div class="md:w-2/3">
              <!-- <input
                v-model="addTime"
                class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white"
                id="inline-full-name"
                type="text"
              />-->
              <el-time-select
                v-model="addTime"
                :picker-options="{
    start: '08:30',
    step: '00:10',
    end: '23:50'
  }"
                placeholder="Select time"
              ></el-time-select>
            </div>
          </div>
        </div>
      </div>
      <!-- <h1 class="text-gray-800 text-4xl">Name : {{movie.movieName}}</h1>
        <h1 class="text-gray-800 text-xl">ID : {{movie.movieId}}</h1>
        <a :href="movie.movieThumbnail">Thumbnail URL : {{movie.movieThumbnail}}</a>
        <p class="text-gray-800">movieReleaseDate : {{movie.movieReleaseDate}}</p>
        <p class="text-gray-800">movieLength : {{movie.movieLength}}</p>
      <p class="text-gray-800">movieDescription : {{movie.movieDescription}}</p>-->
      <div
        class="lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
      >
        <div class="p-3">
          <button
            @click="addShowtime"
            class="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >Add new Movie</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

import ShowtimeList from "./ShowtimeList";

import Cookie from "js-cookie";
import VueCookies from "vue-cookies";
import VueJwtDecode from "vue-jwt-decode";

export default {
  name: "ShowtimeManager",
  components: {
    ShowtimeList
  },
  data() {
    return {
      datashowtime: [],
      datamovie: [],
      datatheater: [],
      movieOptions: [],
      theaterOptions: [],
      movieSelected: "",
      theaterSelected: "",
      addDate: "",
      addTime: "",
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() < Date.now();
        }
      },
      username:''
    };
  },
  async created() {
    this.username = $cookies.get("jwt-token");
    if (!this.username.length == 0) {
      console.log(this.username);
      this.username = VueJwtDecode.decode(this.username).sub;
    }
    try {
      const response = await axios.get(`http://34.87.24.186:8080/theater/`);
      this.datatheater = response.data;
    } catch (e) {
      this.errors.push(e);
    }

    try {
      const response = await axios.get(`http://34.87.24.186:8080/movie/`);
      this.datamovie = response.data;
    } catch (e) {
      this.errors.push(e);
    }

    try {
      const response = await axios.get(`http://34.87.24.186:8080/showtime`);
      this.datashowtime = response.data;
    } catch (e) {
      this.errors.push(e);
    }

    for (let i in this.datamovie) {
      this.movieOptions.push({
        value: this.datamovie[i]._id,
        text: this.datamovie[i].movieName
      });
    }
    for (let i in this.datatheater) {
      this.theaterOptions.push({
        value: this.datatheater[i]._id,
        text: this.datatheater[i].theaterId
      });
    }
  },
  methods: {
    addShowtime() {
      axios
        .post("http://34.87.24.186:8080/showtime", {
          movieId: this.movieSelected,
          theaterId: this.theaterSelected,
          date: this.addDate,
          time: this.addTime,
          status: true,
          availableSeats: this.datatheater.seats
        })
        .then(response => {
          window.location.reload();
        })
        .catch(e => {
          console.error(e);
        });
    }
  }
};
</script>

<style scoped>
</style>
