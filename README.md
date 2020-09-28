# Vida
Vida is a Vue 3 component library for utility components.

## How to use

1) Install `vida` by running this command in the root folder of your Vue project:
```
npm install @alanmorel/vida
```

2) Tell your app to use `vida` globally:

```
import Vida from "@alanmorel/vida";

const app = createApp(App);

app.use(Vida);
```

or alternatively explicitly tell Vue where you're getting the component from, like so:
```
<template>
    <VidaSample />
</template>

import { VidaSample } from "@alanmorel/vida";

<script>
    export default {
        name: "App",
        components: {
            VidaSample
        }
    };
</script>
```
