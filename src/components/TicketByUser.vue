<template>
  <el-card class="mx-auto my-10 w-3/5">
    <h2 @click="goTicket(userTicket.username)">{{userTicket.username}}</h2>
    <h2>Total Ticket : {{userTicket.tickets.length}}</h2>
  </el-card>
</template>

<script>
export default {
  name: "TicketByUser",
  props: ["userTicket"],
  data() {
    return {};
  },
  methods: {
    goTicket(username) {
      this.$router.push({ name: "Ticket", params: { username } });
    }
  }
};
</script>


<style scoped>
</style>

