<template>
  <div>
    <Menu/>
    <div class="page-body">
      <img alt="beer" src="@/assets/chalkboard.jpeg"/>
    </div>
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
  data() {

  }
}
</script>

<style>
img {
  width: 70%;
  height: auto;
  object-fit: cover;
  padding-top: 40px;
}

.page-body {
  text-align: center;
}
</style>
