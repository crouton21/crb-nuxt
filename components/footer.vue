<template>
  <span :class="{'dark': variant === 'dark'}">
    <hr>
    <b-container class="footer">
      <img class="footer-column footer-logo logo" src="@/assets/CopperRiverSIMPLE-transformed.jpg" />
      <div class="footer-grid">
        <b-row>
          <b-column>
            <div id="address">
              <h5>Address</h5>
              <p>507 1st Street</p>
              <p>Cordova,&nbsp;AK 99574</p>
            </div>
          </b-column>
          <b-column>
            <div id="phone">
              <h5>Phone</h5>
              <p>(907) 424-3355</p>
            </div>
          </b-column>
        </b-row>
        <b-row>
          <b-column>
            <div id="hours">
              <h5>Hours</h5>
              <p>12pm - 10pm  Monday-Saturday</p>
              <p>9pm last call</p>
            </div>
          </b-column>
          <b-column>
            <div id="email">
              <h5>Email</h5>
              <p>copperriverbrew@gmail.com</p>
            </div>
          </b-column>
        </b-row>
      </div>
    </b-container>
  </span>
</template>

<script>
  export default {
    props: ['variant']
  }
</script>

<style scoped>

  hr {
    width: 90%;
    background: #303d40;
    margin-top: 60px;
    border-width: 3px;
  }

  .footer {
    max-width: 90%;
    display: flex !important;
  }

  .dark {
    color: #dfe2ed;
    hr {
      background: #dfe2ed;
    }
  }

  .footer-logo {
    flex-basis: 20%;
    min-width: 0;
    background-color: transparent;
    text-align: center;
    padding: 1vh 0;
    mix-blend-mode: multiply;
    object-fit: contain;
    vertical-align: middle;
    filter: invert(33%) sepia(30%) saturate(329%) hue-rotate(178deg) brightness(95%) contrast(112%);
  }

  .row {
    grid-gap: 15%;
    text-align: center;
    justify-content: center;
    padding: 0;
  }

  b-column {
    min-width:300px;
    div {
      min-height: 130px;
    }
  }

  .footer-grid {
    flex: 1;
    align-self: center;
    p, h5 {
      color: #303d40;
      margin-bottom: 8px;
    }
  }

  .dark {
    p, h5 {
      color: #dfe2ed !important;
    }
    hr {
      background: #dfe2ed !important;
    }
  }

  h5 {
    font-weight: 700;
    margin-bottom: 16px;
  }

  @media only screen and (max-width: 1140px) {
    .footer-logo {
      display: none;
    }

    b-column {
      div {
        min-height: 0px;
      }
    }

    .footer {
      display: block;
      text-align: center;
      padding: 20px;
    }

    #address {
      padding-top: 20px;
    }

    #phone, #hours, #email, #address {
      padding-bottom: 20px;
    }
  }
</style>
