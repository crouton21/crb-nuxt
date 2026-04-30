<template>
<div>
  <Menu class="menu"/>
  <MobileMenu class="mobile-menu"/>
  <div class="page-body">
    <div id="events-intro">
      <b-container>
        <b-row>
          <b-col id="events-desc-col">
            <p>
              From live music and trivia nights to seasonal celebrations and local pop-ups,
              there's always something happening at CRB. We love bringing people together and
              making memories in this little corner of Alaska. If you'd like to host a private
              event, birthday party, fundraiser, or gathering of any kind, we'd love to make it happen.
            </p>
            <p>
              Reach out to Audrey at
              <a href="mailto:copperriverbrewingmanager@gmail.com">copperriverbrewingmanager@gmail.com</a>
              to inquire about hosting an event or if you have any questions.
            </p>
          </b-col>
        </b-row>
      </b-container>
    </div>
    <div id="events-calendar">
      <b-container fluid>
        <b-row>
          <b-col class="calendar-col">
            <div class="calendar-wrapper">
              <iframe
                src="https://calendar.google.com/calendar/embed?src=06deac5d38ca050fb46a2640fd3344350b5d3d32a9bbe52e1fa9762b3f7fe690%40group.calendar.google.com&ctz=America%2FAnchorage"
                style="border: 0; width: 100%;"
                frameborder="0"
                scrolling="no"
                class="calendar-iframe"
              ></iframe>
            </div>
          </b-col>
        </b-row>
      </b-container>
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
  head() {
    return {
      title: 'Events | Copper River Brewing',
      meta: [{ hid: 'description', name: 'description', content: 'Live music, trivia nights, seasonal events, and private bookings at Copper River Brewing in Cordova, AK. Contact Audrey to host your event.' }]
    }
  }
}
</script>

<style scoped>

.page-body {
    margin-top: 40px;
}

#events-intro {
  padding: 8px 0 20px;

  h3 {
    color: #303d40;
    font-weight: 700;
    text-align: center;
    padding: 4px 0 6px;
  }

  p {
    color: #303d40;
    font-size: 18px;
    line-height: 1.4;
    margin-bottom: 10px;
  }

  a {
    color: #8c5000;
  }
}

#events-calendar {
  margin: 0 20px;
  background-color: #334858;
  color: #dfe2ed;
  padding-bottom: 12px;
}

#events-desc-col > p {
  font-size: 19px;
}

.calendar-col {
  padding: 8px 12px 0;
}

.calendar-wrapper {
  width: 100%;
}

.calendar-iframe {
  height: calc(100vh - 260px);
  min-height: 500px;
}

@media only screen and (max-width: 1140px) {
  #events-calendar {
    margin: 0;
  }
}

@media only screen and (max-width: 1140px) {
  #events-calendar {
    margin: 0;
  }
}
</style>
