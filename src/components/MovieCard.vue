<template>
  <!--การ์ดที่มีหนังมีชื่อหนังวันที่เข้าอ่ะ-->

    <!-- <el-card :body-style="{ padding: '0px' }" shadow="hover">
      <img v-bind:src="picpath" class="image" />
      <div class="information-container">
        <p class="show-date">วันที่เข้าฉาย: {{ date }}</p>
        <p class="movie-title">{{ title }}</p>
      </div>
    </el-card> -->

    <div @click="movieSelect" class="max-w-sm rounded overflow-hidden shadow-lg m-3">
      <img class="w-full" :src="picpath" alt="Sunset in the mountains" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{{ title}}</div>
        <p
          class="show-date text-gray-700 text-base"
        >วันที่เข้าฉาย: {{ date }}</p>
      </div>
    </div>

</template>

<script>
import json from "../assets/movielist.json";

export default {
  name: "MovieCard",
  props: ["id","title", "picpath", "date"],
  data() {
    return {
      nowshowing: json.nowShowingList,
      comingsoon: json.comingSoonList
    };
  },
  methods: {
    movieSelect() {
          this.$router.push({
            name: "NowShowingDetail",
            params: { id: this.id }
            
          });
      console.log(this.id);
      // for (let i = 0; i < this.nowshowing.length; i++) {
      //    console.log(this.nowshowing[i].movieId
      //     )
      //   if (this.nowshowing[i].movieTitle == this.title) {
      
         
      //   }
      // }
      // for (let i = 0; i < this.comingsoon.length; i++) {
      //   if (this.comingsoon[i].movieTitle == this.title) {
      //     this.$router.push({
      //       name: "ComingSoonDetail",
      //       params: { id: this.comingsoon[i].movieId }
      //     });
      //   }
      // }
    }
  }
};
</script>

<style scoped>
.image {
  width: 100%;
}

.information-container {
  margin-top: -10px;
  text-align: center;
}

.show-date {
  color: #409eff;
}

.movie-title {
  font-size: 16px;
  margin-top: -10px;
}
</style>
