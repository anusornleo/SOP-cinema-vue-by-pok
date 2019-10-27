import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import TheaterList from '@/components/TheaterList'
import ComingSoon from '@/components/ComingSoon'
import NowShowing from '@/components/NowShowing'
import Theater from '@/components/Theater'
import Login from '@/components/Login'
import MovieDetail from '@/components/MovieDetail'
import SelectSeat from '@/components/SelectSeat'
import Register from '@/components/Register'
import Profile from '@/components/Profile'
import Payment from '@/components/Payment'
import MovieManager from '@/components/MovieManager'
import ShowtimeManager from '@/components/ShowtimeManager'
import TheaterManager from '@/components/TheaterManager'
import TicketAll from '@/components/TicketAll'
import Ticket from '@/components/Ticket'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/theater',
      name: 'TheaterList',
      component: TheaterList
    },
    {
      path: '/theater/:id',
      name: 'Theater',
      component: Theater
    },
    {
      path: '/comingsoon',
      name: 'ComingSoon',
      component: ComingSoon
    },
    {
      path: '/nowshowing',
      name: 'NowShowing',
      component: NowShowing
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/nowshowing/:id',
      name: 'NowShowingDetail',
      component: MovieDetail
    },
    {
      path: '/comingsoon/:id',
      name: 'ComingSoonDetail',
      component: MovieDetail
    },
    {
      path: '/selectseat/:id',
      name: 'SelectSeat',
      component: SelectSeat
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/payment',
      name: 'Payment',
      component: Payment
    },
    {
      path: '/moviemanage',
      name: 'MovieManager',
      component: MovieManager
    },
    {
      path: '/showtimemanage',
      name: 'ShowtimeManager',
      component: ShowtimeManager
    },
    {
      path: '/theaterManager',
      name: 'TheaterManager',
      component: TheaterManager
    },
    {
      path: '/ticket-all',
      name: 'TicketAll',
      component: TicketAll
    },
    {
      path: '/ticket',
      name: 'Ticket',
      component: Ticket
    }
  ]
})
