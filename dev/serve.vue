<script>
import { defineComponent } from 'vue';
// Uncomment import and local "components" registration if library is not registered globally.
// import { VidaSample } from '@/entry.esm';

export default defineComponent({
  name: 'ServeDev',
  // components: {
  //  VidaSample,
  // }
});
</script>

<template>
  <div id="app">
    <vida-sample />
  </div>
</template>
