# Michiel Leunens -- Next.js template

This is an opinionated starter template in `Next.js v10.1` which uses all best practices as of 2021. This way you can churn more (static) websites with less code.

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
- :white_check_mark: Theming with `next-theming` (complete with dark theme)
- :x: Animations with `Framer Motion`
- :white_check_mark: Easy class toggling

### Components & Functionalities

- :white_check_mark: Responsive skeleton
- :white_check_mark: Dynamic layout
- :white_check_mark: SEO-component with `next-seo`
- :x: Cookie consent
- :white_check_mark: Internationalization (i18n)
- :x: Form validation
- :x: Navigation
- :white_check_mark: Footer
- :x: 404 page
- :x: Error page
- :x: Thank you page (forms)
- :x: Inline SVG support

### UI-components

- :white_check_mark: Responsive Grid-system
- :x: Modern, accessible Modal
- :x: Snackbar
- :x: Logo
- :x: Button
- :x: Next-Image w/ Aspect Ratio hack
- :x: Links
- :x: Form
- :x: Input fields w/ checkbox and switch
- :x: Loading Placeholder
- :x: Spinner
- :x: Accordion
- :x: Dropdown
- :x: Language Switcher

### Other

- :x: `sitemap.xml`
- :x: `robots.txt`
- :white_check_mark: SEO optimizations with custom image
- :white_check_mark: Web manifest
- :white_check_mark: Scaled favicons
- :x: Dynamic imports
- :x: Smooth scrolling with polyfill
- :x: Lighthouse optimizations
- :white_check_mark: Chrome transitions bug fix
- :x: Inter-OS compatibility (no weird styling issues between MacOs & Windows)
- :x: Inter-browser compatibility
- :x: IE-11 no-support warning
- :x: Caching
- :x: Body Scroll Lock
- :x: Cookie management

### Maybe

- :x: Carousel
- :x: Page-transitions
- :x: Mapbox
- :x: Client-Authentication
- :x: Dockerize

## Getting Started

Install dependencies:

```bash
yarn
```

Run the development server:

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

`_default.scss` is the main theme file. This scss file contains all `root:` css variables. For better reusability & readability, all `css` variables reference `scss`-variables in the `styles/common` folder. I strongly recommend to look at the variables so you know which one's are already available to you.

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

### Custom theming features

To include functions, constants and mixins in your globally scoped scss files:

```scss
// In _components/button.module.scss
// Import the theme file
@use '@styles/theme';

.warning {
  @include theme.breakpoint-up(md) {
    color: purple;
  }
}
```

#### Breakpoints

This styling system includes a `breakpoint-up`(mobile first) and a `breakpoint-down` (desktop-first) mixin.

The breakpoint mixin takes a size paramater, which refers to the breakpoints defined in the `/styles/common/_variables.scss`. You can alter or add breakpoints there if you prefer to do so.

1. `breakpoint-up($size)`
   1. sm
   2. md
   3. lg
   4. xl
   5. xxl
2. `breakpoint-down($size)`
   1. xs
   2. sm
   3. md
   4. lg
   5. xl

#### Colors

In `styles/common/_colors.scss` you should define your color palette. I personally the Material-design guidelines somewhat. You can access these colors then in your `_theme.scss` files.

#### Typography

This project strongly follows accessible font-size guidelines. We don't set a base font-size in the `html` tag and use `rem` everywhere.

In `styles/common/_typography.scss` you'll find some global variables about typography which you can change to your liking. It also provides a **type-scale function**, which you can access in the `_default.scss` theme file. The _Major Second_ scale is better suited for mobile devices, so I recommend using t hat first. You can overwrite the scale and base-font-size for larger sizes.

```scss
// Will default to 16px or the user's preferred size.
--font-size: 100%;
--ratio: #{theme.type-ratio('majorSecond')};

// Will scale the base font-size a bit more for large-screens. A different ratio is also used.
@include theme.breakpoint-up(xxl) {
  --font-size: 112.5%;
  --ratio: #{theme.type-ratio('perfectFourth')};
}
```

#### Variables

The `styles/common/_variables.scss` file contains some leftover handy functions and constants.

##### Z-index

```scss
$z-negative: -1;
$z-low: 10;
$z-mid: 100;
$z-high: 1000;
$z-ultra: 10000;
$z-extreme: 9999999999;
```

##### Border-radius

```scss
$border-radius: 0.25rem;
```

##### Box-and-drop shadows

The theme provides both a drop-and-box shadow variant of each shadow.

```scss
$box-shadow-xs
$box-shadow-sm
$box-shadow-md
$box-shadow-lg
$box-shadow-xl

$drop-shadow-xs
$drop-shadow-sm
$drop-shadow-md
$drop-shadow-lg
$drop-shadow-xl
```

There is also a handy drop-shadow mixin, so you can have custom colored drop-shadows.
It takes a `$size` and a custom `$color` param.

```scss
// In _components/button.module.scss
// Import the theme file
@use '@styles/theme';

.warning {
  @include theme.drop-shadow-colored($size, $color);
}
```

1. `$size`
   1. xs
   2. sm
   3. md
   4. lg
   5. xl

##### Transitions

The theme defines a global transition duration and easing.

```scss
$transition-timing: cubic-bezier(0.16, 1, 0.3, 1);
$transition-duration: 330ms;
```

A transition-mixin is provided, to easily apply a transition with abovementioned values for different css-properties.

```scss
// in styles/global/base.scss
.body {
  @include theme.transition(background-color, color, border-color);
}
```

### Self host fonts

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
