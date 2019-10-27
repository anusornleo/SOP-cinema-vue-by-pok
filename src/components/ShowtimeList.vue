<template>
  <div class="my-3 max-w-sm w-full lg:max-w-full lg:flex shadow-lg">
    <div
      class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
      title="Woman holding a mug"
    >
      <!-- <img v-bind:src="addThumbnail" /> -->
    </div>
    <div
      v-show="!isEditing"
      style="width: 100%;"
      class="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"
    >
      <div class="mb-8">
        <h1 class="text-gray-800 text-4xl">Movie : {{showtime.movieName}}</h1>
        <h1 class="text-gray-800 text-xl">Theater : {{showtime.theaterId}}</h1>
        <h1 class="text-gray-800 text-xl">Date : {{showtime.date}}</h1>
        <h1 class="text-gray-800 text-xl">Time : {{showtime.time}}</h1>
      </div>
    </div>
    <!-- <div
      v-show="isEditing"
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
            <label class="block text-gray-900 font-bold mb-1 md:mb-0" for="inline-full-name">Theater</label>
          </div>
          <div class="md:w-2/3">
            <div class="inline-block relative w-64">
              <select
                class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                v-model="theaterSelected"
              >
                <option v-for="option in theaterOptions" :key="option.id">{{option.text}}</option>
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
            <el-date-picker
              v-model="date"
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
            <label class="block text-gray-900 font-bold mb-1 md:mb-0" for="inline-full-name">Time</label>
          </div>
          <div class="md:w-2/3">
            <el-time-select
              v-model="time"
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
    </div> -->
    <div
      class="lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
    >
      <div class="p-3">
        <button
          v-on:click="deleteMovie"
          class="w-full bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded"
        >Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ShowtimeList",
  props: ["showtime", "datamovie", "datatheater"],
  data() {
    return {
      isEditing: false,
      movieOptions: [],
      theaterOptions: [],
      movieSelected: this.showtime.movieId,
      theaterSelected: this.showtime.theaterId,
      date: this.showtime.date,
      time: this.showtime.time
    };
  },
  methods: {
    showForm() {
      this.isEditing = true;
    },
    hideForm() {
      this.isEditing = false;
    },
    deleteMovie() {
      axios
        .delete("http://theaterapi-env.ztbw4evbna.ap-southeast-1.elasticbeanstalk.com/api/showtime?id=" + this.showtime.id)
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