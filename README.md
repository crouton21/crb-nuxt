# Copper River Brewing

Static site for [Copper River Brewing](https://copperriverbrewing.com) — craft beer, food, and good vibes in Cordova, AK.

Built with [Nuxt 3](https://nuxt.com) + Vue 3, statically generated, deployed to Netlify.

## Setup

```bash
pnpm install
```

## Development

```bash
pnpm dev
```

## Build (static)

```bash
pnpm generate
pnpm preview
```

## Deployment

Pushes to `main` automatically deploy to Netlify via the settings in `netlify.toml`.

## Updating content

| What to change | File |
|---|---|
| Beer list | `data/beers.ts` |
| Food items | `data/food.ts` |
| Non-alcoholic options | `data/na-options.ts` |
| Staff / Brew Crew | `data/staff.ts` |
| Hours, phone, address | `data/business.ts` |
| Staff & food photos | `assets/images/` |

## Stack

- **Nuxt 3** — SSG, file-based routing, auto-imports
- **@nuxt/image** — WebP conversion, responsive srcset at build time
- **FontAwesome** — hamburger, Facebook, Instagram icons (3 icons; could replace with inline SVGs to drop the dep)
- **Sass** — design tokens in `assets/styles/tokens.scss`, single breakpoint (`$bp-mobile: 1140px`)
- **Netlify** — static hosting, `netlify.toml` configures build
