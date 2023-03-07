<template>
  <div>
    <Menu class="menu"/>
    <MobileMenu class="mobile-menu"/>
    <div class="page-body">
      <b-container>
        <b-row>
          <b-col cols="9" id="food-photo-col">
            <img id="food-photo" src="@/assets/food.jpg" />
          </b-col>
          <b-col id="food-options-col">
            <p>
              Food choices rotate nightly. &nbsp All sandwiches made with home-baked bread.
            </p>
            <p>Go-tos include:</p>
            <p>
              <ul v-for="(foodItem, index) in food">
                <li><i>{{food[index]}}</i></li>
              </ul>
            </p>
            <br>
            <p>
              <span class="take-out">Take-out orders welcome!</span>
            </p>
          </b-col>
        </b-row>
      </b-container>
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
  #food-photo {
    max-width: 100%;
  }

  #food-photo-col {
    padding: 0 20px 0 0;
  }

  .col {
    padding: 0px;
  }

  li {
    list-style: none;
  }

  .take-out {
    font-weight: 700;
  }

  #food-options-col {
    padding: 10px 40px;
  }

  @media only screen and (max-width: 640px) {

    #food-photo-col {
      padding: 20px 40px;
      max-width: 100%;
    }

  }
</style>
