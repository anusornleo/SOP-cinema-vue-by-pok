<template>
  <div class="container mx-auto px-4">
    <TicketInfo v-for="ticket in dataTicket" :key="ticket.id" :ticket="ticket" />
  </div>
</template>

<script>
import axios from "axios";
import TicketInfo from "./TicketInfo";
export default {
  name: "Ticket",
  props: ["username"],
  components: {
    TicketInfo
  },
  data() {
    return {
      user: this.$route.params.username,
      dataTicket: []
    };
  },
  created() {
    axios
      .get(
        "http://34.87.24.186:8080/u/" +
          this.user
      )
      .then(response => {
        this.dataTicket = response.data;
      })
      .catch(e => {
        this.errors.push(e);
      });
  }
};
</script>

<style scoped>
</style>