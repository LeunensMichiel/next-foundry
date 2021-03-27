# Michiel Leunens -- Next.js template

This is an opinionated starter template in `Next.js v10` which uses all best practices as of 2021. This way you can churn more (static) websites with less code.

> :bulb: This project contains a lot of custom components. Everything is loosely coupled, so you can easily delete what you don't need. :warning: **IE11 is not supported**.

## :fire: Current Features

### Development

- :white_check_mark: Typescript
- :white_check_mark: Yarn
- :white_check_mark: ES-Lint / Prettier
- :white_check_mark: Husky
- :white_check_mark: Correct `*.ignore`
- :white_check_mark: `env`-variables

### Theming & Styles

- :white_check_mark: `scss`-modules
- :white_check_mark: Modern `reset.scss`
- :white_check_mark: Fully featured design-system (colors, typography,...)
- :white_check_mark: Theming with `next-theming` (Complete with dark theme)
- :x: Animations with `Framer Motion`
- :x: Easy class toggling

### Components & Functionalities

- :x: Responsive skeleton
- :x: Dynamic layout
- :x: SEO-wrapper
- :x: Cookie consent
- :x: Internationalization (i18n)
- :x: Form validation
- :x: 404 page
- :x: Error page
- :x: Thank you page (forms)
- :x: Inline SVG support

### UI-components

- :x: Responsive Grid-system
- :x: Navigation
- :x: Footer
- :x: Modern, accessible Modal
- :x: Snackbar
- :x: Logo
- :x: Button
- :x: Links
- :x: Form
- :x: Input fields w/ checkbox and switch
- :x: Loading Placeholder
- :x: Spinner
- :x: Accordion
- :x: Dropdown

### Other

- :x: `sitemap.xml`
- :x: `robots.txt`
- :x: SEO optimizations with custom image
- :x: Web manifest
- :x: Scaled favicons
- :x: Dynamic imports
- :x: Smooth scrolling with polyfill
- :x: Responsive (with proper meta)
- :x: Lighthouse optimizations
- :white_check_mark: Chrome transitions bug fix
- :x: Inter-OS compatibility (no weird styling issues between MacOs & Windows)
- :x: Inter-browser compatibility
- :x: IE-11 no-support warning
- :x: Caching
- :x: Cookie management

### Maybe

- :x: Carousel
- :x: Page-transitions
- :x: Mapbox
- :x: Client-Authentication
- :x: Dockerize

## Getting Started

First, run the development server:

```bash
yarn dev
```

To run a production build, run:

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

## Theming

This projects makes use of `next-theming`, which is a handly lightweight plugin that takes care of all modern theming-relatable features and fixes SSR hydratation problems.
We make use of global css variables (next to our scss variables) because of how easy and lightweight it is to switch themes this way. (eg: Google, Facebook and Github use this).

`_default.scss` is the main theme file. This scss file contains all `root:` css variables. For better reusability & readability, all `css` variables reference `scss`-variables in the `styles/common` folder.

The `styles/global` folder contains a modern cross-browser `reset` stylesheet, applis global styles and imports your themes.
The `styles/pages` folder contains all the scss-modules for the Next's `src/pages` folder.
The `styles/common` folder contains all scss mixins and variables, like typography values and breakpoints.
The `styles/theme.scss` file forwards all scss mixins and variables from `styles/common`. In your scoped module, you can import them like this:

```scss
// In _components/button.module.scss
@use '@styles/theme';

.warning {
  @include theme.breakpoint-up(md) {
    color: purple;
  }
}
```

### Create a theme

To create a new theme, navigate to `styles/themes`, then make a `_myTheme.scss file` in the `themes` root.
Define your variables like this:

```scss
// in _myTheme.scss
@use '@styles/theme';

[data-theme='myTheme'] {
  --yourVariable: #{theme.$myVariable};
  ...
}
```

The variables will overwrite those defined in `_default.scss`.
Navigate to `styles/global/base.scss` and import your new stylesheet so it gets globally loaded. **Import it after the default theme.**
Lastly, navigate to `pages/_app.tsx` and add your new theme to the `ThemeProvider.themes` array.

### Self host fonts

Want to self-host your fonts? (recommended!), you can easily set this up:

Download your `.woff2` font(s) from eg: [Google webfont helper](`https://google-webfonts-helper.herokuapp.com/fonts`).

`.woff2` [will suffice for support]('https://caniuse.com/woff2'). If you want to support older browsers, _like IE11_, you can download the `.woff` variant as well as a fallback.

1. Put your fonts in the `global/fonts` folder. Create one if it does not exist yet.
2. Navigate to `styles/common/_typography.scss` and uncomment the `@font-face` code-block.
   1. !! Duplicate the @font-face for each font-style your're serving (eg 400, 400i, 700,...)
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

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
