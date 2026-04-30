<template>
  <div class="on-tap-wrapper">
    <Menu class="menu" variant="dark" />
    <MobileMenu class="mobile-menu" variant="dark" />
    <div class="page-body">
      <b-container>
        <b-row id="beer-photo-row">
          <img id="beer-photo" src="@/assets/flight.jpg" loading="lazy" />
        </b-row>
      </b-container>
      <b-container>
        <h3>Beers On Tap</h3>
        <p class="rotating-note">Our tap list rotates frequently — this may not reflect what's currently pouring.</p>
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
    <Footer variant="dark" />
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
  },
  head() {
    return {
      title: 'On Tap | Copper River Brewing',
      meta: [{ hid: 'description', name: 'description', content: 'Check what\'s on tap at Copper River Brewing in Cordova, AK. Rotating craft beers brewed in-house — list may change often.' }]
    }
  }
}
</script>

<style>

.on-tap-wrapper {
  background-color: #334858;
  min-height: 100vh;
}

.on-tap-wrapper .page-body {
  text-align: center;
  color: #dfe2ed;
  margin-top: 40px;
}

.on-tap-wrapper .rotating-note {
  color: #dfe2ed;
  font-size: 0.9em;
  opacity: 0.8;
  font-style: italic;
  margin-bottom: 20px;
}

.on-tap-wrapper .beer-header {
  width: 100%;
  display: inline-flex;
  text-align: left;
}

.on-tap-wrapper .additional-info {
  margin-left: auto;
}

.on-tap-wrapper .additional-info > span {
  padding: 0 5px;
  white-space: pre;
}

.on-tap-wrapper .row {
  padding: 30px;
}

.on-tap-wrapper .beer-name {
  font-weight: 700;
}

.on-tap-wrapper .description {
  text-transform: lowercase;
  text-align: left;
}

.on-tap-wrapper #beer-photo {
  max-width: 100%;
  border-radius: 225px;
}

.on-tap-wrapper .beer-item {
  display: inline-flex;
  width: 100%;
}

.on-tap-wrapper h3 {
  font-weight: 700;
  padding-top: 40px;
}

.on-tap-wrapper h3:before {
  content: '';
  background-color: #dfe2ed;
  height: 1px;
  display: block;
  position: relative;
  width: 100%;
  transform: translateY(-10px);
}

.on-tap-wrapper #beer-photo-row {
  margin: auto;
  display: block;
}

@media only screen and (max-width: 1140px) {
  .on-tap-wrapper .column_wrapper {
    column-count: 1;
    padding: 0;
  }

  .on-tap-wrapper .beer-item {
    padding: 20px 10px;
  }

  .on-tap-wrapper .description {
    padding-left: 5px;
    text-align: left;
  }

  .on-tap-wrapper .beer-header {
    display: block !important;
  }

  .on-tap-wrapper .beer-name {
    display: inline-block;
    padding-left: 5px;
    margin: 0;
  }

  .on-tap-wrapper #beer-photo-row {
    width: 100%;
  }

  .on-tap-wrapper #beer-photo {
    border-radius: 50px;
  }
}

@media only screen and (min-width: 1140px) {
  .on-tap-wrapper .column_wrapper {
    column-count: 2;
  }
}

@media only screen and (max-width: 1140px) {
  .on-tap-wrapper #beer-photo-row {
    padding: 0;
  }

  .on-tap-wrapper .container {
    padding: 0;
  }
}
</style>
