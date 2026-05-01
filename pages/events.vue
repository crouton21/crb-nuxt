<script setup lang="ts">
import { business } from '~/data/business'

useSeo({
  title: 'Events',
  description: 'Live music, trivia nights, seasonal events, and private bookings at Copper River Brewing in Cordova, AK. Contact Audrey to host your event.',
  path: '/events',
})
</script>

<template>
  <div class="events page-body">
    <section class="events-intro">
      <h1 class="visually-hidden">Events</h1>
      <p>
        From live music and trivia nights to seasonal celebrations and local pop-ups,
        there's always something happening at CRB. We love bringing people together and
        making memories in this little corner of Alaska. If you'd like to host a private
        event, birthday party, fundraiser, or gathering of any kind, we'd love to make it happen.
      </p>
      <p>
        Reach out to Audrey at
        <a :href="`mailto:${business.email.manager}`">{{ business.email.manager }}</a>
        to inquire about hosting an event.
      </p>
    </section>

    <div class="calendar-container">
      <iframe
        src="https://calendar.google.com/calendar/embed?src=06deac5d38ca050fb46a2640fd3344350b5d3d32a9bbe52e1fa9762b3f7fe690%40group.calendar.google.com&ctz=America%2FAnchorage"
        title="Copper River Brewing events calendar"
        class="calendar-iframe"
        style="border: 0; width: 100%;"
        frameborder="0"
        scrolling="no"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
}

.events {
  padding-top: 40px;
}

.events-intro {
  padding: 8px 0 20px;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;

  p {
    color: $color-text;
    font-size: 19px;
    line-height: 1.4;
    margin-bottom: 10px;
  }

  a {
    color: $color-link;

    &:hover {
      color: $color-link-hover;
      text-decoration: underline;
    }
  }
}

.calendar-container {
  margin: 0 20px;
  background-color: $color-bg-dark;
  padding: 8px 12px 12px;

  @include mobile {
    margin: 0;
  }
}

.calendar-iframe {
  height: calc(100vh - 260px);
  min-height: 500px;
}
</style>
