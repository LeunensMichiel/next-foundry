# Michiel Leunens -- Next.js template

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
To define a new theme, navigate to `styles/theme`. In the `colors` subfolder, make a `_paletteThemeName.scss`. Then make a `_theme.scss file` in the `theme` root.

Define your variables like this:

```scss
@use 'colors/paletteThemeName';

[data-theme='myTheme'] {
  --primary: #{paletteLight.$myColor};
  ...
}
```

The variables will overwrite those defined in `_light.scss`, which is the default theme.
Lastly, navigate to `pages/_app.tsx` and add your theme to the `ThemeProvider.themes` array.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
