<template>
  <div class="container mx-auto mx-4">
    <TheaterLists v-for="theater in dataTheater" :key="theater.id" :datatheater="theater" />
    <div class="my-3 max-w-sm w-full lg:max-w-full lg:flex shadow-lg">
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
              >Theater Number</label>
            </div>
            <div class="md:w-1/6">
              <input
                v-model="addTheaterId"
                class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white"
                id="inline-full-name"
                type="text"
              />
            </div>
            <a>
              ( Theater has been :
              <a v-for="t in dataTheater" :key="t.id">{{t.theaterId}},</a> )
            </a>
          </div>
        </div>
        <div class="mb-1">
          <div class="md:flex md:items-center mb-1">
            <div class="md:w-1/6">
              <label
                class="block text-gray-900 font-bold mb-1 md:mb-0"
                for="inline-full-name"
              >Seat Mode</label>
            </div>
            <div class="md:w-3/6">
              <el-select v-model="seatModeSelected" placeholder="Select">
                <el-option
                  v-for="item in optionGroupSeat"
                  :key="item.id"
                  :label="item.text"
                  :value="item.value"
                ></el-option>
              </el-select>
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
            @click="save"
            class="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >Add new Theater</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

import TheaterLists from "./TheaterLists";

export default {
  name: "TheaterManager",
  components: {
    TheaterLists
  },
  data() {
    return {
      dataTheater: [],

      addTheaterId: "",
      seatModeSelected: "",
      optionGroupSeat: [
        {
          text: "Mode 1 (12 x 9)",
          value: [
            "A1",
            "A2",
            "A3",
            "A4",
            "A5",
            "A6",
            "A7",
            "A8",
            "A9",
            "A10",
            "A11",
            "A12",
            "B1",
            "B2",
            "B3",
            "B4",
            "B5",
            "B6",
            "B7",
            "B8",
            "B9",
            "B10",
            "B11",
            "B12",
            "C1",
            "C2",
            "C3",
            "C4",
            "C5",
            "C6",
            "C7",
            "C8",
            "C9",
            "C10",
            "C11",
            "C12",
            "D1",
            "D2",
            "D3",
            "D4",
            "D5",
            "D6",
            "D7",
            "D8",
            "D9",
            "D10",
            "D11",
            "D12",
            "E1",
            "E2",
            "E3",
            "E4",
            "E5",
            "E6",
            "E7",
            "E8",
            "E9",
            "E10",
            "E11",
            "E12",
            "F1",
            "F2",
            "F3",
            "F4",
            "F5",
            "F6",
            "F7",
            "F8",
            "F9",
            "F10",
            "F11",
            "F12",
            "G1",
            "G2",
            "G3",
            "G4",
            "G5",
            "G6",
            "G7",
            "G8",
            "G9",
            "G10",
            "G11",
            "G12",
            "H1",
            "H2",
            "H3",
            "H4",
            "H5",
            "H6",
            "H7",
            "H8",
            "H9",
            "H10",
            "H11",
            "H12",
            "I1",
            "I2",
            "I3",
            "I4",
            "I5",
            "I6",
            "I7",
            "I8",
            "I9",
            "I10",
            "I11",
            "I12"
          ]
        },
        {
          text: "Mode 2 (10 x 8)",
          value: [
            "A1",
            "A2",
            "A3",
            "A4",
            "A5",
            "A6",
            "A7",
            "A8",
            "A9",
            "A10",
            "B1",
            "B2",
            "B3",
            "B4",
            "B5",
            "B6",
            "B7",
            "B8",
            "B9",
            "B10",
            "C1",
            "C2",
            "C3",
            "C4",
            "C5",
            "C6",
            "C7",
            "C8",
            "C9",
            "C10",
            "D1",
            "D2",
            "D3",
            "D4",
            "D5",
            "D6",
            "D7",
            "D8",
            "D9",
            "D10",
            "E1",
            "E2",
            "E3",
            "E4",
            "E5",
            "E6",
            "E7",
            "E8",
            "E9",
            "E10",
            "F1",
            "F2",
            "F3",
            "F4",
            "F5",
            "F6",
            "F7",
            "F8",
            "F9",
            "F10",
            "G1",
            "G2",
            "G3",
            "G4",
            "G5",
            "G6",
            "G7",
            "G8",
            "G9",
            "G10",
            "H1",
            "H2",
            "H3",
            "H4",
            "H5",
            "H6",
            "H7",
            "H8",
            "H9",
            "H10"
          ]
        },
        {
          text: "Mode 3 (10 x 6)",
          value: [
            "A1",
            "A2",
            "A3",
            "A4",
            "A5",
            "A6",
            "A7",
            "A8",
            "A9",
            "A10",
            "B1",
            "B2",
            "B3",
            "B4",
            "B5",
            "B6",
            "B7",
            "B8",
            "B9",
            "B10",
            "C1",
            "C2",
            "C3",
            "C4",
            "C5",
            "C6",
            "C7",
            "C8",
            "C9",
            "C10",
            "D1",
            "D2",
            "D3",
            "D4",
            "D5",
            "D6",
            "D7",
            "D8",
            "D9",
            "D10",
            "E1",
            "E2",
            "E3",
            "E4",
            "E5",
            "E6",
            "E7",
            "E8",
            "E9",
            "E10",
            "F1",
            "F2",
            "F3",
            "F4",
            "F5",
            "F6",
            "F7",
            "F8",
            "F9",
            "F10"
          ]
        }
      ]
    };
  },
  async created() {
    axios
      .get(`http://34.87.24.186:8080/theater/`)
      .then(response => {
        this.dataTheater = response.data;
        this.dataTheater.sort((a, b) => (parseInt(a.theaterId)  > parseInt(b.theaterId)) ? 1 : -1)
      })
      .catch(e => {
        this.errors.push(e);
      });
  },
  methods: {
    save() {
      axios
        .post(`http://34.87.24.186:8080/theater`, {
          theaterId: this.addTheaterId,
          seats: this.seatModeSelected
        })
        .then(response => {
           window.location.reload();
        })
        .catch(e => {
          this.errors.push(e);
        });
     
    }
  }
};
</script>

<style scoped>
</style>