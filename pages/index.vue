<template>
  <div>
    <div>
      <Menu class="menu"/>
      <MobileMenu class="mobile-menu"/>
      <img class="the-brewery" alt="The brewery" src="@/assets/brewery_main.jpg" />
    </div>
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
    height: 78vh;
    width: 100%;
    object-fit: cover;
    border-bottom: 15px solid #f7f3ed;
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

@media only screen and (max-width: 640px) {
  .the-brewery {
    height: 72vh;
  }
}

</style>
