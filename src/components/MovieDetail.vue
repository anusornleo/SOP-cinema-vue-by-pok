<template>
  <div id="moviedetail-container">
    <div>
      <Header></Header>
    </div>
    <el-main>
      <div class="box-detail-container">
        <div class="box-detail shadow-xl">
          <div class="poster">
            <img
              class="shadow-lg"
              style="border-radius: 14px;"
              :src="movieDetail[0].movieThumbnail"
            />
          </div>
          <div class="detail">
            <div class="main-detail">
              <h1 class="name">{{movieDetail[0].movieName}}</h1>
            </div>
            <!-- <p class="gnere">หมวดหมู่: {{movieList[movieId-1].genre}}</p> -->
            <ul class="movie-detail-list">
              <li
                class="list-item"
                style="padding-left:0;"
              >movieReleaseDate : {{movieDetail[0].movieReleaseDate}}</li>
              <br />
              <li class="list-item" style="padding-left:0;">Lenght : {{movieDetail[0].movieLength}}</li>
              <br />
              <li class="list-item" style="padding-left:0;">{{movieDetail[0].movieDescription}}</li>
              <br />
            </ul>
          </div>
        </div>
        <!-- <el-dialog title="ตัวอย่างภาพยนตร์" :visible.sync="centerDialogVisible" width="51%" center>
          <span>
            <iframe
              width="720"
              height="480"
              frameborder="0"
              v-bind:src="movieList[movieId-1].movieTrailer"
            ></iframe>
          </span>
          <span slot="footer" class="dialog-footer">
            <el-button
              icon="el-icon-circle-close"
              type="primary"
              @click="centerDialogVisible = false"
            >ปิดหน้าต่าง</el-button>
          </span>
        </el-dialog>-->
      </div>
      <br />
      <!-- <div v-for="date in showtime" :key="date.id">
        <div v-for="(time,index) in date" :key="time.id">
          <h1 v-if="index==0">{{time}}</h1>
          <h1 v-else>{{time.time}} {{time.id}}</h1>
        </div>
      </div>-->

      <div class="container mx-auto px-56">
        <el-row v-if="showtime_isEmply == false">
          <div v-for="date in showtime" :key="date.id">
            <a v-for="(time,index) in date" :key="time.id">
              <div v-if="index==0" class="font-bold text-xl mb-2">{{time}}</div>
              <el-button
                @click="goSelector(time.id)"
                v-if="index!=0"
                class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
              >{{time.time}}</el-button>
            </a>
          </div>
        </el-row>
        <el-row v-else>
          <h1>No Showtime avalable</h1>
        </el-row>
      </div>
    </el-main>
  </div>
</template>

<script>
import axios from "axios";

import Header from "./Header";
import ShowTimeTCard from "./ShowTimeTCard";
import moviejson from "../assets/movielist.json";
import theaterjson from "../assets/theater.json";

export default {
  name: "MovieDetail",
  components: {
    Header,
    ShowTimeTCard
  },
  data() {
    if (this.$route.name == "NowShowingDetail") {
      return {
        movieId: this.$route.params.id,
        movieDetail: [],
        showdate: [],
        showtime: [],
        showtimeId: [],
        datamovie: [],
        showtime_isEmply: false
      };
    }
    // if (this.$route.name == "ComingSoonDetail") {
    //   return {
    //     movieId: this.$route.params.id,
    //     movieList: moviejson.comingSoonList,
    //     theaterList: theaterjson.cineplexList,
    //     showTimestate: false,
    //     centerDialogVisible: false
    //   };
    // }
  },
  async created() {
    try {
      const response = await axios.get(
        `http://localhost:9000/api/showtime?movie=` + this.movieId
      );
      this.movieDetail = response.data;
    } catch (e) {
      this.errors.push(e);
    }
    if (this.movieDetail.length == 0) {
      this.showtime_isEmply = true;
      try {
        const response = await axios.get(
          `http://localhost:9000/api/movie/` + this.movieId
        );
        this.movieDetail = response.data;
      } catch (e) {
        this.errors.push(e);
      }
    } else {
      for (let _date in this.movieDetail) {
        if (!this.showdate.includes(this.movieDetail[_date].date)) {
          this.showdate.push(this.movieDetail[_date].date);
          this.showtime.push([this.movieDetail[_date].date]);
          this.showtime[
            this.showdate.indexOf(this.movieDetail[_date].date)
          ].push({
            time: this.movieDetail[_date].time,
            id: this.movieDetail[_date].id
          });
        } else {
          this.showdate.indexOf(this.movieDetail[_date].date);
          // console.log(this.showdate.indexOf(this.movieDetail[_date].date));
          this.showtime[
            this.showdate.indexOf(this.movieDetail[_date].date)
          ].push({
            time: this.movieDetail[_date].time,
            id: this.movieDetail[_date].id
          });
        }
      }
    }
  },
  methods: {
    goSelector(id) {
      this.$router.push({
        name: "SelectSeat",
        // path: '/selectseat/'+id,
        params: { id }
      });
    }
  }
};
</script>

<style scoped>
.box-detail-container {
  margin-left: 8.333333%;
  width: 83.333333%;
  /* float: left; */
  position: relative;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 15px;
  box-sizing: border-box;
}
.box-detail {
  background-color: #fff;
  border-radius: 5px;
  margin-top: 40px;
  margin-bottom: 40px;
  padding: 0 50px 0 100px;
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
}
.poster {
  margin-left: 0;
  padding: 0;
  margin-top: -40px;
  margin-bottom: -40px;
  /* margin-left: -25px; */
  float: left;
  box-sizing: border-box;
  width: 30%;
}
.detail {
  padding: 30px 45px;
  color: black;
}
.main-detail {
  margin-bottom: 30px;
}
.name {
  font-size: 20px;
  margin: 0;
  padding: 0;
  font-weight: 600;
}
.genre {
  margin: 0;
  margin-bottom: 5px;
}
.movie-detail-list {
  padding: 0;
  margin: 0;
  list-style: none;
}
.list-item {
  padding: 0 15px;
  line-height: 1;
  display: inline-block;
  vertical-align: middle;
}
.showtime-container {
  padding-left: 10em;
  padding-right: 10em;
}
</style>