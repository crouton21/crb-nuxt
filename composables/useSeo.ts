interface SeoOptions {
  title: string
  description: string
  ogImage?: string
  path?: string
}

const BASE_URL = 'https://copperriverbrewing.com'

export function useSeo({ title, description, ogImage, path = '' }: SeoOptions) {
  const canonical = `${BASE_URL}${path}`
  const fullTitle = title.includes('Copper River Brewing')
    ? title
    : `${title} | Copper River Brewing`
  const image = ogImage ?? `${BASE_URL}/og-default.jpg`

  useHead({
    title: fullTitle,
    link: [{ rel: 'canonical', href: canonical }],
    meta: [
      { name: 'description', content: description },
      // Open Graph
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: canonical },
      { property: 'og:title', content: fullTitle },
      { property: 'og:description', content: description },
      { property: 'og:image', content: image },
      // Twitter
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: fullTitle },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: image },
    ],
  })
}
