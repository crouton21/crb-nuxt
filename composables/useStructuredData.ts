import { business } from '~/data/business'

export function useStructuredData() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': ['Brewery', 'BarOrPub', 'LocalBusiness'],
    name: business.name,
    description: 'Craft brewery, taproom, and kitchen in Cordova, Alaska.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: business.address.street,
      addressLocality: business.address.city,
      addressRegion: business.address.state,
      postalCode: business.address.zip,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: business.geo.latitude,
      longitude: business.geo.longitude,
    },
    telephone: business.phoneTel,
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '12:00',
        closes: '22:00',
      },
    ],
    priceRange: '$$',
    servesCuisine: ['American', 'Seafood'],
    sameAs: [business.social.facebook, business.social.instagram],
    url: 'https://copperriverbrewing.com',
  }

  useHead({
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify(jsonLd),
      },
    ],
  })
}
