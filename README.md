# Michiel Leunens -- Next Foundry, a Next.js template

[![Netlify Status](https://api.netlify.com/api/v1/badges/d6d4a2c2-9abe-4c33-9117-b08c0b87d5ce/deploy-status)](https://app.netlify.com/sites/nextfoundry/deploys)

This is an opinionated starter template in `Next.js v12.1`. This way you can churn more (static) websites with less code.

> :bulb: This project contains a lot of custom components. Everything is loosely coupled, so you can easily delete what you don't need. :warning: **IE11 is not supported**.

## :fire: Current Features (& TODO)

### Development

- :white_check_mark: Typescript
- :white_check_mark: Yarn
- :white_check_mark: ES-Lint / Prettier
- :white_check_mark: Husky
- :white_check_mark: Correct `*.ignore`
- :white_check_mark: `env`-variables
- :white_check_mark: Versioning

### Theming & Styles

- :white_check_mark: `scss`-modules
- :white_check_mark: Modern `reset.scss`
- :white_check_mark: Fully featured design-system (colors, typography,...)
- :white_check_mark: Theming with `next-theming` (complete with dark theme)
- :white_check_mark: Easy class toggling
- :white_check_mark: Animations with `Framer Motion`

### Components & Functionalities

- :white_check_mark: Responsive skeleton
- :white_check_mark: Dynamic layout
- :white_check_mark: SEO-component with `next-seo`
- :white_check_mark: Internationalization (i18n)
- :white_check_mark: Navigation
- :white_check_mark: Footer
- :white_check_mark: 404 page
- :white_check_mark: Error page
- :white_check_mark: OnClickOutside and other usefull hooks
- :white_check_mark: Cookie consent
- :white_check_mark: Form validation
- :white_check_mark: MDX & MD page generation with i18n
- :white_check_mark: Privacy & Terms and conditions page

### UI-components

- :white_check_mark: Responsive Grid-system
- :white_check_mark: Logo
- :white_check_mark: Button
- :white_check_mark: Next-Image w/ Aspect Ratio hack
- :white_check_mark: Spinner
- :white_check_mark: Dropdown
- :white_check_mark: Toasts (react-toastify)
- :white_check_mark: Modern, accessible Modal
- :white_check_mark: Banner
- :white_check_mark: Form
- :white_check_mark: TextField
- :white_check_mark: NumberField
- :white_check_mark: Checkbox
- :white_check_mark: RadioButton
- :white_check_mark: Switch
- :white_check_mark: Select Field (Single and Multi Select)
- :white_check_mark: Text Area
- :white_check_mark: Tooltip
- :white_check_mark: Badge
- :white_check_mark: Loading Placeholder
- :white_check_mark: Accordion
- :white_check_mark: Language Switcher
- :white_check_mark: Map powered by mapbox

### Other

- :white_check_mark: SEO optimizations with custom image
- :white_check_mark: Web manifest
- :white_check_mark: Scaled favicons
- :white_check_mark: Chrome transitions bug fix
- :white_check_mark: Body Scroll Lock
- :white_check_mark: Active Link styling
- :white_check_mark: Cookie management
- :white_check_mark: `sitemap.xml`
- :white_check_mark: `robots.txt`
- :white_check_mark: Smooth scrolling with polyfill

### Future

- :x: Carousel
- :x: Tabs
- :x: Page-transitions
- :x: Pagination Component
- :x: Infinte Scrolling List
- :x: Paralax
- :x: Client-Authentication

## Getting Started

Install dependencies:

```bash
yarn
```

Run the development server:

```bash
yarn dev
```

Run a production build:

```bash
yarn build
yarn start
```

## Formatting and Linting

This template makes use of `Husky`, which will run `es-lint` and `prettier` automatically before each commit.
In case you want to run these commands manually, you can do as follows:

```bash
yarn lint
```

```bash
yarn format
```

## Self host fonts

Want to self-host your fonts? (recommended!), you can easily set this up:

Download your `.woff2` font(s) from eg: [Google webfont helper](https://google-webfonts-helper.herokuapp.com/fonts).

`.woff2` [will suffice for support](https://caniuse.com/woff2). If you want to support older browsers, _like IE11_, you can download the `.woff` variant as well as a fallback.

1. Put your fonts in the `global/fonts` folder. Create one if it does not exist yet.
2. Navigate to `styles/common/_typography.scss` and uncomment the `@font-face` code-block.
   1. :warning: Duplicate the @font-face for each font-style your're serving (eg 400, 400i, 700,...)
   2. Add your font to the scss variables of choice. eg: `$font-family-base: 'My Font', $font-family-system;`. You can add it to your `_theme.scss` file as well instead, if you want a different font per theme.
3. Lasly, navigate to `components/common/Head` and add this `<link>` tag **for EACH font-file you added in the fonts folder.** Enjoy the free lighthouse/performance improvements.

```jsx
<link
  rel="preload"
  href="/fonts/myFont.woff2"
  as="font"
  type="font/woff2"
  crossOrigin="anonymous"
/>
```

## SEO

This template is configured with [Next-SEO](https://github.com/garmeeh/next-seo) to bring out the best of Next.js. Follow the documentation for more information on how to customize this to your liking.

The default `seo-default` configuration is located in the `components/common/Head` file. Change it to your liking.
Don't forget to add your _google-site-verification_ meta-tag!

You can add an og:image for each page, but a default image is configured in the default settings as wel. This image is named `card.jpg`, and can be found under `/global/`. Swap this image out with your custom `card.jpg`.

## Internationalization (i18n)

Translation is provided by Next's build-in internationalization's + a neat little package called [Next-translate](https://github.com/vinissimus/next-translate). Easy to follow documentation.
The default provided languages in this template are `English`, `Dutch` and `French` as I'm Belgian :smile:.

### Favicons en Webmanifest

Go to a favicon generator like [favicongenerator](https://realfavicongenerator.net/). For this generator, in the last step, you can provide a custom directory. Enter the `/meta/` directory and download your files. Place them in the `public/meta/` folder.
If the generator also created a `webmanifest`, put it there as well. Otherwise, you'll need to create one yourself. (Recommended).

Lastly, copy the `<link>` and `<meta>` tags and overwrite the current ones in `components/common/Head`.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
