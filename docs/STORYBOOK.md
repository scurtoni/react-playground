# Storybook

Storybook setup (React)

TLDR:

```
npx sb init
```

[Reference](https://storybook.js.org/docs/react/get-started/install)

Installed dependecies:

```
"@storybook/react"
"@storybook/addon-actions"
"@storybook/addon-essentials"
"@storybook/addon-links"
```

npm scripts:

```
"storybook":"start-storybook -p 6006",
"build-storybook":"build-storybook"
```

[fix storybook for webpack 5](https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#webpack-5-manager-build)

Note:
rerun npm install after the fix

Note:
if you want to use TypeScript path aliases in storybook add the folowing fix into main.js config file:

```
webpackFinal: async (config, {configType}) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@components": path.resolve(__dirname, "../src/components"),
      ....
    };
    return config;
  }
```
