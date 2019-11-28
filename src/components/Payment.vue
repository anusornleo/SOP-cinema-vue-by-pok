<template>
  <div id="payment-container">
    <el-header>
      <Header></Header>
    </el-header>
    <el-main class="payment-confirm-container">
      <!-- <el-row>
            <el-col>
                <div class="nameinfo">
                    <p>คุณ {{userinfo.firstname}} {{userinfo.lastname}}</p>
                    <p>Email : {{userinfo.email}}</p>
                </div>
                <div class="total-pay">
                    <p><span>ยอดชำระเงิน {{paymentinfo.price}} bath</span></p>
                </div>
            </el-col>
      </el-row>-->

      <el-row>
        <el-col>
          <div class="box-wrap">
            <div class="heading">ยืนยันการซื้อบัตรชมภาพยนตร์</div>
            <div>
              <div
                class="max-w-sm w-full lg:max-w-full lg:flex shadow-lg"
                style="width: 80%;margin: auto;"
              >
                <div
                  class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                  title="Woman holding a mug"
                >
                  <img v-bind:src="datamovie.movieThumbnail" />
                </div>
                <div
                  style="width: 100%;"
                  class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal"
                >
                  <div class="mb-8">
                    <h1 class="text-gray-800 text-4xl">{{datamovie.movieName}}</h1>
                    <a class="my-3 text-gray-800 text-xl">Theater : {{datashowtime.theaterId}}</a>
                    <div>
                      <a
                        class="bg-blue-500 text-white py-0 px-2 rounded-full"
                      >Time {{datashowtime.time}}</a>
                      <a
                        class="bg-blue-500 text-white py-0 px-2 rounded-full"
                      >Date {{datashowtime.date}}</a>
                    </div>

                    <div>
                      <button
                        v-for="(seat) in buy"
                        :key="seat.id"
                        class="my-3 mr-3 bg-blue-500 text-white py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                      >{{seat}}</button>
                    </div>
                    <div>
                      <h1 class="text-gray-800 text-xl">Cost {{buy.length * 200}} baht</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="heading">เลือกช่องทางการชำระเงิน</div>
            <div class="btn-wrap">
              <div class="payment-method">
                <!-- <div class="inner" @click="member=true;kbank=false;credit=false">
                  <div class="method">
                    <img src="../assets/member.png" style="width:60%;" />
                    <span class="method-label">บัตรสมาชิก</span>
                  </div>
                </div>-->
                <div class="inner" @click="member=false;kbank=true;credit=false">
                  <div class="method">
                    <img src="../assets/k-bank.png" style="width:70%;" />
                    <span class="method-label">KBank</span>
                  </div>
                </div>
                <!-- <div class="inner" @click="member=false;kbank=false;credit=true">
                  <div class="method">
                    <img src="../assets/credit.png" style="width:60%;" />
                    <span class="method-label">บัตรเครดิต / บัตรเดบิต</span>
                  </div>
                </div>-->
              </div>
            </div>

            <div style="padding-top: 1em;">
              <el-button style="text-align: center;" icon="el-icon-circle-check" type="primary" @click="save">Confirm</el-button>
              <!-- <div v-if="member">
                <h2 style="text-align: center;">กรุณากรอกข้อมูลสมาชิก</h2>
                <div class="form-container">
                  <el-input
                    class="input-form"
                    placeholder="หมายเลขสมาชิก"
                    v-model="member_section.member_id"
                  ></el-input>
                  <el-input
                    type="password"
                    class="input-form"
                    placeholder="รหัสผ่าน"
                    v-model="password"
                  ></el-input>
                  <div style="text-align: center;padding-top: 1.5em;">
                    <el-button
                      type="primary"
                      icon="el-icon-circle-check"
                      @click="confirmForm"
                    >ยืนยันการสั่งซื้อ</el-button>
                  </div>
                </div>
              </div>-->
              <!-- <div v-if="kbank">
                <div class="form-container">
                  <el-input
                    type="password"
                    class="input-form"
                    placeholder="รหัสผ่าน"
                    v-model="password"
                  ></el-input>
                </div>
                <div style="text-align: center;padding-top: 1.5em;">
                  <el-button
                    icon="el-icon-circle-check"
                    type="primary"
                    @click="save"
                  >ยืนยันการสั่งซื้อ</el-button>
                </div>
              </div>-->
              <!-- <div v-if="credit">
                <h2 style="text-align: center;">กรุณากรอกข้อมูลบัตร</h2>
                <div class="form-container">
                  <el-input
                    class="input-form"
                    placeholder="ชื่อผู้ถือบัตร"
                    v-model="credit_section.name"
                  ></el-input>
                  <el-input
                    class="input-form"
                    placeholder="หมายเลขบัตร"
                    v-model="credit_section.card_id"
                  ></el-input>
                  <div class="ddyy-cvv-container">
                    <el-input
                      class="input-form-min"
                      placeholder="ดด/ปป"
                      v-model="credit_section.ddyy"
                    ></el-input>
                    <el-input class="input-form-min" placeholder="CVV" v-model="credit_section.cvv"></el-input>
                  </div>
                  <el-input
                    type="password"
                    class="input-form"
                    placeholder="รหัสผ่าน"
                    v-model="password"
                  ></el-input>
                  <div style="text-align: center;padding-top: 1.5em;">
                    <el-button
                      icon="el-icon-circle-check"
                      type="primary"
                      @click="confirmForm"
                    >ยืนยันการสั่งซื้อ</el-button>
                  </div>
                </div>
              </div>-->
            </div>
          </div>
        </el-col>
      </el-row>
    </el-main>
  </div>
</template>

<script>
import axios from "axios";

import Header from "./Header";
import Ticket from "./Ticket";

import Cookie from "js-cookie";
import VueCookies from "vue-cookies";
import VueJwtDecode from "vue-jwt-decode";

export default {
  name: "Payment",
  props: ["buy_list", "showTimeId"],
  components: {
    Header,
    Ticket
  },
  data() {
    return {
      userinfo: JSON.parse(window.localStorage.getItem("user")),
      paymentinfo: JSON.parse(window.localStorage.getItem("confirmData")),
      member: false,
      kbank: false,
      credit: false,
      member_section: {
        member_id: ""
      },
      credit_section: {
        name: "",
        card_id: "",
        ddyy: "",
        cvv: ""
      },
      password: "",
      buy: this.$route.params.buy_list,
      showtime_id: this.$route.params.showTimeId,
      datashowtime: [],
      datamovie: [],
      aval_seat: [],
      filter: [],
      l: 0
    };
  },
  async created() {
    try {
      const response = await axios.get(
        `http://34.87.24.186:8080/showtime?id=` + this.showtime_id
      );
      // console.log("this.movieDetail");
      this.datashowtime = response.data;
      this.aval_seat = response.data.availableSeats;
      this.l = this.buy.length;
      try {
        const response = await axios.get(
          `http://34.87.24.186:8080/movie/` + this.datashowtime.movieId
        );
        // console.log("this.movieDetail");
        this.datamovie = response.data;
      } catch (e) {
        this.errors.push(e);
      }
    } catch (e) {
      this.errors.push(e);
    }

    for (let i = 0; i < this.l; i++) {
      this.aval_seat.splice(this.aval_seat.indexOf(this.buy[i]), 1);
    }
  },
  methods: {
    confirmForm() {
      if (this.member) {
        if (this.member_section.member_id == "") {
          this.$notify.error({
            title: "การยืนยันการชำระเงินผิดพลาด",
            message: "กรุณาระบุข้อมูลให้ครบถ้วน",
            position: "top-left"
          });
        } else {
          this.confirmPayment();
        }
      } else if (this.credit) {
        if (
          this.credit_section.name == "" ||
          this.credit_section.card_id == "" ||
          this.credit_section.ddyy == "" ||
          this.credit_section.cvv == ""
        ) {
          this.$notify.error({
            title: "การยืนยันการชำระเงินผิดพลาด",
            message: "กรุณาระบุข้อมูลให้ครบถ้วน",
            position: "top-left"
          });
        } else {
          this.confirmPayment();
        }
      } else {
        this.confirmPayment();
      }
    },
    confirmPayment() {
      if (this.password != this.userinfo.password) {
        this.$notify.error({
          title: "การยืนยันการชำระเงินผิดพลาด",
          message: "กรุณาใส่รหัสผ่านให้ถูกต้อง",
          position: "top-left"
        });
      } else {
      }
    },
    save() {
      console.log(this.aval_seat);
      axios
        .put("http://34.87.24.186:8080/showtime/" + this.showtime_id, {
          movieId: this.datashowtime.movieId,
          theaterId: this.datashowtime.theaterId,
          date: this.datashowtime.date,
          time: this.datashowtime.time,
          status: true,
          availableSeats: this.aval_seat
        })
        .then(response => {
          axios
            .post("http://34.87.24.186:8080/u/", {
              username: VueJwtDecode.decode($cookies.get("jwt-token")).sub,
              showtimeId: this.showtime_id,
              seats: this.buy
            })
            .then(res => {
              this.$notify({
                title: "Buy Ticket Success",
                type: "success",
                position: "top-left"
              });
              this.$router.push({ path: "/" });
            })
            .catch(e => {
              console.error(e);
            });
        })
        .catch(e => {
          console.error(e);
        });
    }
  }
};
</script>


<style scoped>
.form-container {
  margin: auto;
  width: 50%;
}
.input-form {
  width: 100%;
  padding-top: 2em;
}
.input-form-min {
  width: 48%;
  padding-top: 2em;
}
.input-form-min:nth-child(2) {
  width: 48%;
  padding-top: 2em;
  padding-left: 2%;
}
.ddyy-cvv-container {
  display: inline-block;
}
.total-pay {
  padding-top: 20px;
  text-align: center;
  color: #2d64cf;
  font-size: 22px;

  line-height: 1;
}
.nameinfo {
  color: #2d64cf;
  font-weight: 700;
  font-size: 20px;
  padding-top: 10px;
  text-align: center;
}
.box-wrap {
  margin-left: 20%;
  margin-right: 20%;
  margin-top: -1px;
  padding: 20px;
  background-color: #fff;
  border: 2px solid #2d64cf;
  border-radius: 5px;
  box-shadow: 0 1px 8px 0 rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 2;
}
.heading {
  color: #2d64cf;
  font-size: 20px;
  padding-top: 10px;
  text-align: center;
  font-weight: 600;
}
.btn-wrap {
  max-width: 350px;
  margin: 0 auto;
}
.payment-method {
  margin: 15px -5px 10px;
  display: flex;
  /* flex-wrap: wrap; */
  justify-content: center;
}
.inner {
  padding: 5px;
  width: 33.33333333%;
  margin-right: 10px;
}
.method {
  text-align: center;
  padding: 5px 5px 10px;
  margin: 0;
  border: 1px solid #c6c7c7;
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  height: 100%;
  width: 100%;
  transition: all 0.2s ease-out;
}
.method:hover {
  text-align: center;
  padding: 5px 5px 10px;
  margin: 0;
  border: 1px solid #2d64cf;
  box-shadow: inset 0 0 0 2px #2d64cf;
  color: #2d64cf;
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  height: 100%;
  width: 100%;
  transition: all 0.2s ease-out;
}
.method-label {
  font-weight: 500;
  display: block;
  line-height: 1;
  transition: all 0.2s ease-out;
}
.seat {
  color: #2d64cf;
  font-size: 24px;

  line-height: 1;
  margin: 0 0 10px;
}
.box-seat {
  text-align: center;
  /* margin-left: 10%;
    margin-right: 10%; */
  margin-top: 15px;
}
</style>