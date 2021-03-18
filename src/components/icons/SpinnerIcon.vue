<template>
    <Icon viewBox="50 50" class="spinner-icon" :class="'spinner-icon--' + (theme ? theme : 'dark')">
        <circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="5" />
    </Icon>
</template>

<script lang="ts">
    import { defineComponent } from "vue";

    import Icon from "@/components/icons/Icon.vue";

    export default defineComponent({
        name: "SpinnerIcon",
        components: {
            Icon
        },
        props: {
            theme: {
                type: String,
                required: true
            }
        }
    });
</script>

<style lang="scss">
    .spinner-icon {
        animation: rotate 2s linear infinite;

        & .path {
            stroke-linecap: round;
            animation: dash 1.5s ease-in-out infinite;
        }

        &--dark .path {
            stroke: black;
        }

        &--light .path {
            stroke: white;
        }
    }

    @keyframes rotate {
        0% {
            transform: translate(-50%, -50%) rotate(0deg);
        }
        100% {
            transform: translate(-50%, -50%) rotate(360deg);
        }
    }

    @keyframes dash {
        0% {
            stroke-dasharray: 1, 150;
            stroke-dashoffset: 0;
        }

        50% {
            stroke-dasharray: 90, 150;
            stroke-dashoffset: -35;
        }

        100% {
            stroke-dasharray: 90, 150;
            stroke-dashoffset: -124;
        }
    }
</style>
