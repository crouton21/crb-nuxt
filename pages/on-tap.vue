<template>
  <div>
    <Menu class="menu"/>
    <MobileMenu class="mobile-menu"/>
    <div class="page-body">
      <b-container>
        <b-row id="beer-photo-row">
          <img id="beer-photo" src="@/assets/beer+micah.jpg" />
        </b-row>
      </b-container>
      <b-container>
        <h3>Beers On Tap</h3>
        <b-col class="column_wrapper">
          <b-row class="beer-item"
            v-for="(beer, index) in beers">
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
      <b-container>
        <h3>Non-Alchoholic Options</h3>
        <b-col class="column_wrapper">
          <b-row class="beer-item"
            v-for="(beer, index) in naOptions">
            <div class="beer-header">
              <h5 class="beer-name">{{beer.name}}</h5>
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
import naOptions from '@/data/na-options'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
export default {
  data() {
    return {
      beers: beers,
      naOptions: naOptions
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
  text-align: left;
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
  font-weight: 700;
}

.description {
  text-transform: lowercase;
  text-align: left;
}

#beer-photo {
  max-width: 100%;
}

.beer-item {
  display: inline-flex;
  width: 100%;
}

h3 {
  font-weight: 700;
  padding-top: 40px;
}

h3:after {
  content: '';
  background-color: #000;
  height: 1px;
  display: block;
  position: relative;
  width: 100%;
  transform: translateY(-43px);
}

#beer-photo-row {
  width: 65%;
  margin: auto;
}

@media only screen and (max-width: 640px) {
  .column_wrapper {
    column-count: 1;
    padding: 0;
  }

  .beer-item {
    padding: 20px 10px;
  }

  .description {
    padding-left: 5px;
    text-align: left;
  }

  .beer-header {
    display: block !important;
  }

  .beer-name {
    display: inline-block;
    padding-left: 5px;
    margin: 0
  }

  #beer-photo-row {
    width: 100%;
  }
}

@media only screen and (min-width: 640px) {
  .column_wrapper {
    column-count: 2;
  }
}

</style>
