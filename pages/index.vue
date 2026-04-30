<template>
  <div class="index-page">
    <div>
      <Menu class="menu"/>
      <MobileMenu class="mobile-menu"/>
      <div class="content page-body">
        <div class="main-text-container">
          <div class="main-text">
            Servin' up good beer, good food and good vibes in Cordova,&nbsp;AK
          </div>
        </div>
        <img class="main-img" alt="The brewery" src="@/assets/growler-download.jpg" fetchpriority="high" />
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
import '@/app.scss'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

export default {
  name: 'IndexPage',
  head() {
    return {
      title: 'Copper River Brewing | Craft Beer in Cordova, AK',
      meta: [{ hid: 'description', name: 'description', content: 'Copper River Brewing — craft beer, homemade food, and good vibes in Cordova, Alaska.' }]
    }
  }
}
</script>

<style lang="scss">

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: calc(100vh - 110px);
    gap: 40px;
    padding: 20px 0;
  }

  .main-text-container {
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .main-text {
    font-family: 'Lovely Groovy';
    letter-spacing: 9px;
    color: #303d40;
    font-size: 65px;
    text-align: center;
  }

  .main-img {
    width: 85%;
    aspect-ratio: 3 / 1;
    border-radius: 200px;
    overflow: hidden;
    object-fit: cover;
  }

  .logo {
    mix-blend-mode: multiply;
    background-color: transparent;
    max-width: 100%;
  }

  .index-page .container {
    display: flex;
  }

  .index-page .col {
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

@media only screen and (max-width: 1140px) {
  .content {
    min-height: auto;
    gap: 20px;
  }

  .main-text-container {
    width: 100%;
    margin-top: 30px;
  }

  .main-text {
    font-size: 45px;
  }

  .main-img {
    width: 100%;
    aspect-ratio: 2 / 1;
    border-radius: 50px;
  }
}

</style>
