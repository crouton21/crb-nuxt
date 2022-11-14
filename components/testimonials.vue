<template>
  <b-carousel
    id="carousel"
    v-model="slide"
    :interval="4000"
    controls
    indicators
    @sliding-start="onSlideStart"
    @sliding-end="onSlideEnd"
  >

    <b-carousel-slide v-for="testimony in testimonials" img-blank>
      <p class="testimony">{{testimony.text}}</p>
    </b-carousel-slide>

  </b-carousel>
</template>

<script>
  import testimonials from '@/data/testimonials.js'
  export default {
    data() {
      return {
        slide: 0,
        sliding: null,
        testimonials: testimonials
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>

<style>
.carousel-item.active {
  display:block;
}

.carousel-control-next,
.carousel-control-prev,
li[id^="carousel___BV_indicator"],
.carousel-caption {
    filter: invert(100%);
    height: 100%;
}

p.testimony {
  position: absolute;
  top: 50%;
  text-align: center;
  width: 100%;
}

@media only screen and (max-width: 1000px) {
  p.testimony {
    font-size: 7px;
  }
}

</style>
