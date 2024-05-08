<template>
  <div>
    <div>
      <Menu class="menu"/>
      <MobileMenu class="mobile-menu"/>
      <div class="content page-body">
        <div class="main-text-container">
          <div class="main-text">
            Servin' up good beer, good food and good vibes in Cordova,&nbsp;AK
          </div>
        </div>
        <img class="main-img" alt="The brewery" src="@/assets/growler-download.jpg" />
      </div>
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

  .content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }

  .main-text-container {
    margin: auto;
    width: 80%;
    margin-top: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }

  .main-text {
    font-family: 'Lovely Groovy';
    letter-spacing: 9px;
    color: #303d40;
    font-size: 100px;
    margin: auto;
    text-align: center;
  }
  
  .main-img {
    border-radius: 480px;
    overflow: hidden;
    width: 100vw;
    aspect-ratio: 2 / 1;
    object-fit: cover;
    margin: 10px 0;
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
  text-transform: uppercase;
}

@media only screen and (max-width: 768px) {
  .main-text {
    font-size: 65px;
  }
}

</style>
