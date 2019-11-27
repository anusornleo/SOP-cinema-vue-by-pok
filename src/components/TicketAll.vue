<template>
  <div>
    <div v-if="username != 'adminmovie'" class="container mx-auto mx-4">You not can't view this page</div>
    <div v-else class="container mx-auto px-4">
      <h1 class="mx-auto">Ticket by User {{username}}</h1>
      <TicketByUser
        v-for="userTicket in dataAllTicket"
        :key="userTicket.id"
        :userTicket="userTicket"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import TicketByUser from "./TicketByUser";

import Cookie from "js-cookie";
import VueCookies from "vue-cookies";
import VueJwtDecode from "vue-jwt-decode";

export default {
  name: "TicketAll",
  components: { TicketByUser },
  data() {
    return {
      dataAllTicket: [],
      username: ""
    };
  },
  created() {
    this.username = $cookies.get("jwt-token");
    if (!this.username.length == 0) {
      console.log(this.username);
      this.username = VueJwtDecode.decode(this.username).sub;
    }
    axios
      .get(`http://34.87.24.186:8080/u/`)
      .then(response => {
        this.dataAllTicket = response.data;
      })
      .catch(e => {
        this.errors.push(e);
      });
  }
};
</script>

<style scoped>
</style>