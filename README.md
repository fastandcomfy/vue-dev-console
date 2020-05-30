# vue-dev-console

## Description

This repo is an example of implementation dev console written in Vue.js.

App flow:

- user fills in the input value (`src/components/HelloWorld.vue`)
- after the value is submitted, the method `addInstance` is invoked (`src/components/HelloWorld.vue`)
- this method processes value and emits new message into event-bus (`src/event-bus.js`)
- there are 2 listeners registered on event-bus (`src/components/devConsole/Action.vue` and `src/components/devConsole/ActionHistory.vue`)
- each of them is processed instance (e.g. adds to history or shows a button

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
