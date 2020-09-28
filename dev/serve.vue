<template>
    <div id="app">
        <vida-sample />
    </div>
</template>

<script>
    import Vue from "vue";
    import { VidaSample } from "@/entry";

    export default Vue.extend({
        name: "ServeDev",
        components: {
            VidaSample
        }
    });
</script>

