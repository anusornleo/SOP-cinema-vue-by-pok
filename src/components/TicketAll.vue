<template>
  <div class="container mx-auto px-4">
    <h1 class="mx-auto">Ticket by User</h1>
    <TicketByUser v-for="userTicket in dataAllTicket" :key="userTicket.id" :userTicket="userTicket" />
  </div>
</template>

<script>
import axios from "axios";
import TicketByUser from "./TicketByUser";
export default {
  name: "TicketAll",
  components: {TicketByUser},
  data() {
    return {
      dataAllTicket:[],
    };
  },
  created(){
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