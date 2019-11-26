<template>
  <!-- <div class="w-3/5 lg:flex mx-auto my-5">
    <div
      class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
    >
      <img src="../assets/logo.png" />
    </div>
    <div
      class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"
    >
      <div class="mb-8">
        <div class="text-gray-900 font-bold text-xl mb-2">{{dataMovie.movieName}}</div>
        <p class="text-gray-700 text-base">{{dataMovie.movieName}}</p>
        <p class="text-gray-700 text-base">{{dataTheater}}</p>
      </div>
    </div>
  </div>-->
  <div class="w-3/5 mx-auto lg:flex shadow-lg my-10">
    <div
      class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden bg-gray-700"
    >
      <img class="py-20 px-2" src="../assets/logo.png"/>
    </div>
    <div
      style="width: 100%;"
      class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"
    >
      <div>
        <h1 class="text-gray-800 text-3xl">{{dataMovie.movieName}}</h1>
        <a class="my-3 text-gray-800 text-xl">Theater : {{dataTheater.theaterId}}</a>
        <div>
          <a class="bg-blue-500 text-white py-0 px-2 rounded-full">Time {{dataShowtime.time}}</a>
          <a class="bg-blue-500 text-white py-0 px-2 rounded-full">Date {{dataShowtime.date}}</a>
        </div>

        <div>
          <button
            v-for="(seat) in ticket.seats"
            :key="seat.id"
            class="my-3 mr-3 bg-blue-500 text-white py-2 px-4 border-b-4 border-blue-700 rounded"
            style="cursor:default"
          >{{seat}}</button>
        </div>
        <div>
          <h1 class="text-gray-800 text-xl">Total : {{total}} bath</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "TicketInfo",
  props: ["ticket"],
  data() {
    return {
      dataShowtime: [],
      dataMovie: [],
      dataTheater: [],
      total: 0
    };
  },
  created() {
    axios
      .get(
        "http://34.87.24.186:8080/showtime?id=" +
          this.ticket.showtimeId
      )
      .then(response => {
        this.dataShowtime = response.data;
        axios
          .get(
            "http://34.87.24.186:8080/movie/" +
              this.dataShowtime.movieId
          )
          .then(response => {
            this.dataMovie = response.data;
            axios
              .get(
                "http://34.87.24.186:8080/theater/" +
                  this.dataShowtime.theaterId
              )
              .then(response => {
                this.dataTheater = response.data;
              })
              .catch(e => {
                console.error(e);
              });
          })
          .catch(e => {
            console.error(e);
          });
      })
      .catch(e => {
        console.error(e);
      });
    this.total = this.ticket.seats.length * 200;
  }
};
</script>

<style scoped>
</style>