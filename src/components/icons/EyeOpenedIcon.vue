<template>
    <Icon viewBox="22 16" class="eye-opened-icon">
        <path
            d="M11 1c4.9 0 8.7 3.1 11 7-2.3 3.9-6.1 7-11 7S2.3 11.9 0 8c2.3-3.9 6.1-7 11-7zm0 10c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3zm0 2c4.3 0 7-2.7 8.6-5C18 5.7 15.3 3 11 3S4 5.7 2.4 8c1.6 2.3 4.3 5 8.6 5z"
        />
    </Icon>
</template>

<script lang="ts">
    import { defineComponent } from "vue";

    import Icon from "@/components/icons/Icon.vue";

    export default defineComponent({
        name: "EyeOpenedIcon",
        components: {
            Icon
        }
    });
</script>

<style lang="scss">
    .eye-opened-icon {
        pointer-events: all;
    }
</style>
