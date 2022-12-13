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
        <br>
        <div id="email">
          <h5>Email</h5>
          <p>copperriverbrew@gmail.com</p>
        </div>
        <br>
        <div id="phone">
          <h5>Phone</h5>
          (907) 424-3355
        </div>
      </b-column>
      <b-column class="footer-column hours">
        <h5>Hours</h5>
        <p><b>Mon - Sun</b>: 3pm - 9pm</p>
        <p id="last-call"><b>Last call</b>: 8pm</p>
      </b-column>
    </b-row>
  </b-container>
</template>

<style scoped>
  .footer-column {
    width: 33%;
    line-height: 6px;
  }

  .footer-logo {
    max-width: 50%;
    background-color: transparent;
    text-align: center;
    padding: 2vh 0;
    mix-blend-mode: multiply;
  }

  .footer-column.hours {
    padding-top: 8vh;
  }

  .footer-column.contact {
    padding-top: 8vh;
  }

  .footer {
    background-color: #15a3b8;
    max-width: 100%;
  }

  h5 {
    font-weight: 600;
  }
</style>
