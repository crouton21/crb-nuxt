<template>
<div>
  <Menu class="menu"/>
  <MobileMenu class="mobile-menu"/>
  <div class="page-body">
    <div id="our-brewery">
      <b-container>
        <b-row class="header">
          <b-col><h3>Our Brewery</h3></b-col>
          <b-col id="hide-column"></b-col>
        </b-row>
        <b-row>
          <b-col id="team-desc-col">
            <i>
            Copper River Brewing was born of the simple observation that
            there are more cool people in Cordova than there are dry spaces.
            CRB is a space for artists, skiers, knitters, fishermen, pilots,
            welders, biologists, desk jockeys, and the many other talented
            and eccentric individuals who call Cordova home.
            </i>
          </b-col>
           <b-col id="team-photo-col">
             <img id="team-photo" src="@/assets/team.jpg" />
          </b-col>
        </b-row>
      </b-container>
    </div>
      <div id="brew-crew">
        <b-container>
          <b-row class="header">
            <b-col><h3>Brew Crew</h3></b-col>
            <b-col id="hide-column"></b-col>
          </b-row>
          <b-row v-for="employee in staff">
            <b-col class="employee-photo-col">
              <img v-if="employee.photo" class="employee-photo" v-bind:src="require(`@/assets/${employee.photo}`)" />
            </b-col>
            <b-col class="employee-info-col">
              <span class="employee-name">{{employee.name}}</span>
              <div class="employee-title">{{employee.title}}</div>
              <div>
                <span class="employee-text">{{employee.text}}</span>
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
import staff from '@/data/staff.js'
import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@/app.scss'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
export default {
  data() {
    return {
      staff: staff
    }
  }
}
</script>

<style lang="scss">
#team-photo {
  border-radius: 50px;
}

.employee-photo {
  height: 400px;
  width: auto;
  margin: 0 auto;
  display: block;
}

img {
  max-width: 100%;
}

.col {
  margin: auto;
  padding: 40px;
}

.employee-name {
  font-weight: 700;
  font-size: 30px;
}

.employee-photo {
  width: 400px;
  height: 400px;
  object-fit: cover;
  border-radius: 50px;
}

.employee-title {
  font-weight: 700;
  font-size: 18px;
}

.header {
  .col {
    padding-bottom: 0px;
    text-align: center;
    h3 {
      font-weight: 700;
    }
    h3:before {
      content: '';
      background-color: #303d40;
      height: 1px;
      display: block;
      position: absolute;
      top: 18px;
      width: 90%;
    }
  }
}

.container {
  padding-top: 50px;
}

#our-brewery {
  padding-top: 70px;
  h3, div {
    color: #303d40;
  }
}

#brew-crew {
  margin: 0 40px;
  background-color: #476c77;
  color: #dfe2ed;
  h3:before {
    background-color: #dfe2ed;
  }
}

#team-photo-col {
  padding: 0px 0px 40px 0px !important;
}

@media only screen and (max-width: 1140px) {
  .employee-photo {
    height: 300px;
  }

  #brew-crew {
    margin: 0;
    .container {
      padding-top: 30px;
      .header {
        .col {
          h3:before {
            width: 90%;
            margin: auto;
            text-align: center;
            margin-left: 5%;
          }
        }
      }
    }
  }

  .container {
    padding-top: 0;
  }

  .employee-photo-col {
    padding-bottom: 0;
  }

  .employee-info-col {
    padding-top: 20px;
  }

  #team-desc-col, #team-photo-col {
    padding: 20px 0;
    font-size: 20px;
  }

  #hide-column {
    display: none;
  }

  .employee-title, .employee-text {
    font-size: 21px;
  }

  .header {
  .col {
    padding: 0;
    h3:before {
      width: 100%;
      transform: translateY(-30px);
    }
  }
}

}
</style>
