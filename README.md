# Vida

Vida is a Vue 3 component library for utility components.

## How to use

1. Install `vida` by running this command in the root folder of your Vue project:

```sh
pnpm add @alanmorel/vida
```

2. Tell your app to use `vida` globally:

```typescript
import Vida from "@alanmorel/vida";

const app = createApp(App);

app.use(Vida);
```

or alternatively explicitly tell Vue where you're getting the component from, like so:

```vue
<template>
    <VidaSample />
</template>

<script>
    import { VidaSample } from "@alanmorel/vida";

    export default {
        name: "App",
        components: {
            VidaSample
        }
    };
</script>
```

## How to preview

To preview all that Vida has to offer, simply run the example page:

```sh
pnpm serve
```
