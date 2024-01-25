# Es-Ui

- Vue 3 Composition API
- Written in TypeScript

## Getting Started

Let's start using EsUI. Here are some simple usage examples. For more information, please go here to [get started](https://lp3565.github.io/es-ui-docs/), However, the official website has not been completed for the time being, so I will wait for this text to be deleted before visiting.

### Install

Choose your favorite package management tool to install

``` 
# npm
$ npm install esui-v

# pnpm
$ pnpm add esui-v

# yarn
$ yarn add esui-v
```

### Usage

#### Complete introduction

If you don't care about the size of the packaged files, using the full version makes development more convenient and fast.

```typescript
// main.ts
import { createApp } from 'vue'
import EsUi from 'esui-v'
import 'esui-v/theme/index.css'
import App from './App.vue'

const app = createApp(App)
app.use(EsUi)
app.mount('#app')
```

#### Manually introduce on demand

Manual introduction on demand can well control the volume of packaged files.

```vue
<template>
 <EsButton>Button</EsButton>
</template>

<script setup lang="ts">
import { EsButton } from 'esui-v'
import 'esui-v/theme/es-button.css'
</script>
```

#### Volar support

If you use Volar, please go to tsconfig.json compilerOptions.type  specifies the global component type.

```json
// tsconfig.json
{
  "compilerOptions": {
    "types": ["esui-v/global"]
  }
}
```

## Concluding remarks

Thank you Handsome guys and beautiful women for using EsUI. If there are any disadvantages, please give me your feedback and I will solve it as soon as possible.

So the content is written through the translation tool. If there is anything wrong, please forgive me.
