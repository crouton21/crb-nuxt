<template>
  <span :class="{'dark': variant === 'dark'}">
    <hr>
    <b-container class="footer">
      <img class="footer-column footer-logo logo" src="@/assets/CopperRiverSIMPLE-transformed.jpg" />
      <div class="footer-grid">
        <div id="address">
          <h5>Address</h5>
          <p>507 1st Street</p>
          <p>Cordova,&nbsp;AK 99574</p>
        </div>
        <div id="phone">
          <h5>Phone</h5>
          <p>(907) 424-3355</p>
        </div>
        <div id="hours">
          <h5>Hours</h5>
          <p>12pm - 10pm  Monday-Saturday</p>
          <p>9pm last call</p>
        </div>
        <div id="email">
          <h5>Email</h5>
          <p>copperriverbrewingmanager@gmail.com (Audrey)</p>
          <p>copperriverbrew@gmail.com (Christiana)</p>
        </div>
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
    padding-top: 20px;
  }

  .dark {
    display: block;
    background-color: #dfe2ed;
    padding-bottom: 24px;
  }

  .dark hr {
    display: none;
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

  .footer-grid {
    flex: 1;
    align-self: center;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10%;
    text-align: center;
    p, h5 {
      color: #303d40;
      margin-bottom: 8px;
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

    .footer {
      display: block;
      text-align: center;
      padding: 20px;
    }

    .footer-grid {
      grid-template-columns: 1fr;
    }

    #address {
      padding-top: 20px;
    }

    #phone, #hours, #email, #address {
      padding-bottom: 20px;
    }
  }
</style>
