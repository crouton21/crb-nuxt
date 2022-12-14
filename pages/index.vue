<template>
  <div>
    <div>
      <Menu class="menu"/>
      <MobileMenu class="mobile-menu"/>
      <img class="the-brewery" alt="The brewery" src="@/assets/brewery.jpeg" />
      <!-- <div id="img-text">Alaska’s newest brewery</div> -->
      <div class="arrow-container">
        <NuxtLink to="#testimonials">
          <img class="down-arrow" alt="down arrow" src="@/assets/double-arrow-down.png" />
        </NuxtLink>
      </div>
    </div>
    <div class="break"></div>
    <b-container>
      <b-row>
        <b-col>
          <p id="testimonials">
            <Testimonials />
          </p>
        </b-col>
        <b-col>
          <img class="logo" src="@/assets/CopperRiverSIMPLE.jpg" />
        </b-col>
      </b-row>
    </b-container>
    <Footer />
    </div>
</template>

<script>
import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueScrollTo from 'vue-scrollto'
import '@/app.scss'
import testimonials from '../components/testimonials.vue'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueScrollTo)

export default {
  components: { testimonials },
  name: 'IndexPage'
}
</script>

<style lang="scss">

  .the-brewery {
    height: 90vh;
    width: 100%;
    object-fit: cover;
  }

  .arrow-container {
    position: absolute;
    text-align: center;
    width: 100%;
    top: 85vh;
  }

  .down-arrow {
    z-index: 30;
    height: 120px;
    top: 85vh;
    animation: updown 2s ease infinite;
    filter: invert(75%);
  }

  .logo {
    mix-blend-mode: multiply;
    background-color: transparent;
    max-width: 100%;
  }

  .container {
    display: flex;
  }

  .col {
    margin: auto;
    padding: 50px;
  }

@keyframes updown {
  0% {
    transform: translateY(-10%);
  }

  50% {
    transform: translateY(10%);
  }

  100% {
    transform: translateY(-10%);
  }
}

#img-text {
  position: absolute;
  text-align: center;
  width: 47%;
  top: 44vh;
  color: #f6f3ed;
  font-size: 40px;
  text-shadow: 2px 2px 4px #000000;
  text-transform: uppercase;
}

.break {
  height: 20px;
  background-color: #17a2b8;
}

@media only screen and (max-width: 640px) {
  .the-brewery {
    height: 70vh;
  }
}

</style>
