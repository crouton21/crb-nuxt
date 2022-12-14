<template>
  <div>
    <Menu class="menu"/>
    <MobileMenu class="mobile-menu"/>
    <div class="page-body">
      <b-container>
        <b-col class="column_wrapper">
          <b-row class="beer-item"
            v-for="(beer, index) in beers"
            v-bind:style="{
              color: colors[index % 3],
            }">
            <div class="beer-header">
              <h5 class="beer-name">{{beer.name}}</h5>
              <div class="additional-info">
              <span v-if="beer.IBU">IBU: {{beer.IBU}}</span>
              <span v-if="beer.ABV">ABV: {{beer.ABV}}%</span>
              </div>
            </div>
            <div class="description">{{beer.description}}</div>
          </b-row>
        </b-col>
      </b-container>
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
import beers from '@/data/beers'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
export default {
  data() {
    return {
      beers: beers,
      colors: ['#FA4616','#008000','#17a2b8']
    }
  }
}
</script>

<style>
.page-body {
  text-align: center;
}

.beer-header {
  width: 100%;
  display: inline-flex;
}

.additional-info {
  margin-left: auto;
}

.additional-info > span {
  padding: 0 5px;
}

.row {
  padding: 30px;
}

.beer-name {
  font-weight: 600;
}

.description {
  text-transform: uppercase;
}

@media only screen and (max-width: 640px) {
  .column_wrapper {
    column-count: 1;
    padding: 0;
  }

  .beer-item {
    padding: 20px 10px;
    display: grid;
  }

  .description {
    float: left;
    padding-left: 5px;
    text-align: left;
  }

  .beer-header {
    display: block !important;
    text-align: left;
  }

  .beer-name {
    display: inline-block;
    padding-left: 5px;
    margin: 0
  }
}

@media only screen and (min-width: 640px) {
  .column_wrapper {
    column-count: 2;
  }
}

</style>
