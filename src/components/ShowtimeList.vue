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
    <div
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
            <!-- <input
              v-model="date"
              class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white"
              id="inline-full-name"
              type="text"
            />-->
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
            <!-- <input
              v-model="time"
              class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white"
              id="inline-full-name"
              type="text"
            />-->
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
    </div>
    <div
      class="lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
    >
      <div class="p-3">
        <button
          v-if="isEditing == false"
          class="w-full bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
          v-on:click="showForm"
        >Edit</button>
        <button
          v-if="isEditing == true"
          class="w-full bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded"
          v-on:click="save"
        >Save</button>
      </div>
      <div class="p-3">
        <button
          v-on:click="deleteMovie"
          v-if="isEditing == false"
          class="w-full bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded"
        >Delete</button>
        <button
          v-if="isEditing == true"
          v-on:click="hideForm"
          class="w-full bg-gray-500 hover:bg-gray-700 text-white py-2 px-4 rounded"
        >Cancel</button>
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
  created() {
    for (let i in this.datamovie) {
      console.log("fect again");
      this.movieOptions.push({
        value: this.datamovie[i].movieId,
        text: this.datamovie[i].movieName
      });
    }
    for (let i in this.datatheater) {
      console.log("fect again");
      this.theaterOptions.push({
        value: this.datatheater[i].theaterId,
        text: this.datatheater[i].theaterId
      });
    }
  },
  methods: {
    showForm() {
      this.isEditing = true;
    },
    hideForm() {
      this.isEditing = false;
    },
    save() {
      axios
        .put("http://localhost:9000/api/showtime/" + this.showtime.id, {
          movieId: this.movieSelected,
          theaterId: this.theaterSelected,
          date: this.date,
          time: this.time,
          status: true
        })
        .then(response => {})
        .catch(e => {
          console.error(e);
        });
      window.location.reload();
    },
    deleteMovie() {
      axios
        .delete("http://localhost:9000/api/showtime/" + this.showtime.id)
        .then(response => {})
        .catch(e => {
          console.error(e);
        });
      window.location.reload();
    }
  }
};
</script>

<style scoped>
</style>