<template>
  <div id="menu">
    <Menu class="menu"/>
    <MobileMenu class="mobile-menu"/>
    <div class="page-body">
      <div class="menu-headers">
        <p class="menu-header">
          Food choices rotate nightly. &nbsp All sandwiches made with home-baked bread.
        </p>
        <p class="menu-sub-header">Go-tos include:</p>
      </div>

      <b-container>
        <b-col class="column_wrapper">
          <b-row class="food-item"
            v-for="(foodItem, index) in food">
            <div class="description">{{food[index]}}</div>
          </b-row>
        </b-col>
      </b-container>
      
      <p class="take-out">Take-out orders welcome!</p>

      <div class="food-grid">
        <b-row class="food-photo-row">
          <b-col cols="4" class="food-photo-wrapper">
            <img class="food-photo" src="@/assets/blt.jpg" />
          </b-col>
          <b-col cols="4" class="food-photo-wrapper">
            <img class="food-photo" src="@/assets/chili.jpg" />
          </b-col>
          <b-col cols="4" class="food-photo-wrapper">
            <img class="food-photo" src="@/assets/burgersoysters.jpg" />
          </b-col>
        </b-row>
        <b-row class="food-photo-row">
          <b-col cols="4" class="food-photo-wrapper">
            <img class="food-photo" src="@/assets/steak.jpg" />
          </b-col>
          <b-col cols="4" class="food-photo-wrapper">
            <img class="food-photo" src="@/assets/bread.jpg" />
          </b-col>
          <b-col cols="4" class="food-photo-wrapper">
            <img class="food-photo" src="@/assets/tacos.jpg" />
          </b-col>
        </b-row>
      </div>

      <br>
      <hr>
      <div id="catering">Catering</div>
      <p class="menu-headers">Yes, we cater!  Email Shae at crcouchpotatoes@gmail.com for catering requests.</p>

    </div>
    <Footer />
 </div>
</template>

<script>
import food from '@/data/food'
import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@/app.scss'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
export default {
  data() {
    return {
      food: food,
    }
  }
}
</script>

<style scoped>

  .page-body {
    margin-top: 70px;
    div, p {
      color: #303d40;
    }
  }
  
  #food-photos-col {
    padding: 0 20px 0 0;
  }

  .col {
    padding: 0px;
  }

  hr {
    width: 75%;
    background: #303d40;
    margin-top: 60px;
    border-width: 1px;
  }

  .take-out {
    font-weight: 700;
    padding-top: 40px;
    padding-bottom: 20px;
    text-transform: uppercase;
  }

  #food-options-col {
    padding: 10px 40px;
  }

  .menu-headers {
    text-align: center;
  }

  .menu-header {
    text-transform: uppercase;
  }

  .menu-sub-header {
    margin-top: 70px;
    font-size: 40px;
    font-family: "Lovely Groovy";
    padding-top: 40px;
  }

  .food-item {
    padding: 20px 10px;
    justify-content: center;
    font-weight: 700;
    color: #303d40;
  }

  .food-photo {
    padding: 30px;
    width: 100%;
    aspect-ratio: 1 / 1;
    overflow: hidden;
    object-fit: cover;
    border-radius: 200px;
  }

  .take-out {
    text-align: center;
  }

  #catering {
    font-size: 40px;
    padding: 40px;
    font-family: "Lovely Groovy";
    text-align: center;
  }

  @media only screen and (max-width: 1140px) {
    #food-photo-col {
      padding: 20px 40px;
      max-width: 100%;
    }
    .column_wrapper {
      column-count: 1;
      padding: 0;
    }

    .food-photo-wrapper {
      max-width: 100%;
    }

    .container {
      text-align: center;
    }

    .menu-sub-header {
      margin-top: 0;
    }

    .food-photo {
      border-radius: 50px;
      padding: 15px;
    }

    hr {
      margin-top: 20px;
    }

  }

  @media only screen and (min-width: 1140px) {
    .column_wrapper {
      column-count: 4;
    }
  }
</style>
