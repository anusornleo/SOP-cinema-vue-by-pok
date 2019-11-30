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
        <h1 class="text-gray-800 text-xl">Theater : {{datatheater[index].theaterId}}</h1>
        <h1 class="text-gray-800 text-xl">Date : {{showtime.date}}</h1>
        <h1 class="text-gray-800 text-xl">Time : {{showtime.time}}</h1>
      </div>
    </div>
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
  props: ["showtime", "datamovie", "datatheater","index"],
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
        .delete("http://34.87.24.186:8080/showtime?id=" + this.showtime.id)
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