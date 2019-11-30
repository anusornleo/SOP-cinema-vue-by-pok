<template>
  <!--หน้า home แหละ-->
  <div id="home-container">
    <header>
     <Header></Header>
    </header>
    <div>
      <el-col :span="24">
        <Movie></Movie>
      </el-col>
    </div>
 
  </div>
</template>

<script>
import Movie from './Movie'
import MovieSelector from './MovieSelector'
import Header from './Header'
export default {
  name: 'Home',
  components: {
    Movie,
    MovieSelector,
    Header
  },
  data (){
    return {
    }
  }
}
</script>

<style scoped>
  .el-carousel__item {
    background-color: #99a9bf;
    text-align: center;
  }
  #home-main-container{
    padding-left: 10em;
    padding-right: 10em;
  }
  .movieselector-container {
        padding-top: 1em;
        padding-left: 10em;
        padding-right: 10em;
        padding-bottom: 2em;
  }

  #moviesection-title {
    text-align: center;
    color: #409EFF;
    padding-bottom: 1em;
  }

</style>
