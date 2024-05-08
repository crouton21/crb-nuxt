<template>
  <b-container class="footer">
    <b-row>
      <b-column class="footer-column footer-logo"><img class="logo footer-logo" src="@/assets/CopperRiverSIMPLE.jpg" /></b-column>
      <b-column class="footer-column contact">
        <div id="address">
          <h5>Address</h5>
          <p>507 1st Street</p>
          <p>Cordova, AK 99574</p>
        </div>
        <div id="phone">
          <h5>Phone</h5>
          (907) 424-3355
        </div>
      </b-column>
      <b-column class="footer-column">
        <div class="hours">
          <h5>Hours</h5>
          <p>3pm - 9pm Monday - Saturday</p>
          <p>8pm last call</p>
        </div>
        <div id="email">
          <h5>Email</h5>
          <p>copperriverbrew@gmail.com</p>
        </div>
      </b-column>
    </b-row>
  </b-container>
</template>

<style scoped>
  .footer-column {
    width: 33%;
    line-height: 6px;
    align-items: center;
    display: inline-grid;
    padding: 105px 0;
  }

  .footer-logo {
    max-width: 65%;
    background-color: transparent;
    text-align: center;
    padding: 1vh 0;
    mix-blend-mode: multiply;
  }

  .footer.container {
    padding: 0 80px;
  }

  .footer {
    background-color: #15a3b8;
    max-width: 100%;
  }

  h5 {
    font-weight: 700;
  }

  @media only screen and (max-width: 768px) {
    /* .footer-logo {
      display: none;
    } */

    .footer {
      display: block;
      text-align: center;
      padding: 20px;
    }

    #address {
      padding-top: 20px;
    }

    #phone {
      padding-bottom: 20px;
    }

    .footer-column {
      display: revert;
    }

    #email {
      padding-bottom: 20px;
    }
}
</style>
