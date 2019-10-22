<template>
  <div class="my-3 max-w-sm w-full lg:max-w-full lg:flex shadow-lg">
    <div
      class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
      title="Woman holding a mug"
    >
      <img v-bind:src="addThumbnail" />
    </div>
    <div
      v-show="!isEditing"
      style="width: 100%;"
      class="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"
    >
      <div class="mb-8">
        <h1 class="text-gray-800 text-4xl">Name : {{movie.movieName}}</h1>
        <h1 class="text-gray-800 text-xl">ID : {{movie.movieId}}</h1>
        <a :href="movie.movieThumbnail">Thumbnail URL : {{movie.movieThumbnail}}</a>
        <p class="text-gray-800">movieReleaseDate : {{movie.movieReleaseDate}}</p>
        <p class="text-gray-800">movieLength : {{movie.movieLength}}</p>
        <p class="text-gray-800">movieDescription : {{movie.movieDescription}}</p>
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
            <input
              v-model="addReleaseDate"
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
            <label class="block text-gray-900 font-bold mb-1 md:mb-0" for="inline-full-name">Length</label>
          </div>
          <div class="md:w-2/3">
            <input
              v-model="addLength"
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
  name: "MovieList",
  props: ["movie"],
  data() {
    return {
      isEditing: false,

      id: this.movie.id,
      addId: this.movie.movieId,
      addThumbnail: this.movie.movieThumbnail,
      addName: this.movie.movieName,
      addReleaseDate: this.movie.movieReleaseDate,
      addLength: this.movie.movieLength,
      addDescription: this.movie.movieDescription
    };
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
        .put("http://localhost:9000/api/movie/" + this.movie.id, {
          movieId: this.addId,
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
      window.location.reload();
    },
    deleteMovie() {
      // console.log("Delete!")
      axios
        .delete("http://localhost:9000/api/movie/" + this.movie.id)
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
