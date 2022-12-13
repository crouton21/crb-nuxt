<template>
  <div>
    <Menu/>
    <div class="page-body">
      <b-container>
        <b-row>
          <b-col>
            <h3>Hours</h3>
            <p>MONDAY: Closed</p>
            <p>TUESDAY: 3:00pm-9:00pm</p>
            <p>WEDNESDAY: 3:00pm-9:00pm</p>
            <p>THURSDAY: 3:00pm-9:00pm</p>
            <p>FRIDAY: 3:00pm-9:00pm</p>
            <p>SATURDAY: 12:00pm-9:00pm</p>
            <p>SUNDAY: 12:00pm-9:00pm</p>
            <p id="last-call">Last call: 8:00pm</p>

            <h3>Contact</h3>
            <div id="address">
              <div>507 1st Street</div>
              <div>Cordova, AK 99574</div>
            </div>
            <br>
            <div id="email">
              copperriverbrew@gmail.com
            </div>
            <div id="phone">
              (907)-424-3355
            </div>

            <!-- <h3>Artists/Partnerships</h3>
            <div>
              Amet tellus cras adipiscing enim eu. Posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Ridiculus mus mauris vitae ultricies leo integer. Tellus elementum sagittis vitae et leo duis. Quisque egestas diam in arcu cursus euismod. Id volutpat lacus laoreet non curabitur gravida arcu ac. Habitasse platea dictumst vestibulum rhoncus. Risus in hendrerit gravida rutrum. Nisi lacus sed viverra tellus in hac habitasse. Malesuada pellentesque elit eget gravida cum. Nisl condimentum id venenatis a condimentum. Arcu felis bibendum ut tristique et egestas.
            </div> -->
          </b-col>
          <b-col>
            <img src="@/assets/beer+micah.jpg"/>
          </b-col>
        </b-row>
      </b-container>
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
  .container {
    display: flex;
  }

  .col {
    margin: auto;
  }

  img {
    max-width: 100%;
  }

  p {
    line-height: .5;
  }

  #last-call {
    font-weight: 800;
  }

  h3 {
    padding-top: 40px;
  }
</style>
