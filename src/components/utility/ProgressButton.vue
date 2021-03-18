<template>
    <div class="progress-button-container">
        <div class="progress-button" :class="{ progress: progress }">
            <SpinnerIcon theme="light" v-if="progress" />
            <input type="submit" :value="text" class="progress-button__input" @click="$emit('click')" />
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from "vue";

    import SpinnerIcon from "@/components/icons/SpinnerIcon.vue";

    export default defineComponent({
        name: "ProgressButton",
        components: {
            SpinnerIcon
        },
        props: {
            progress: {
                type: Boolean,
                required: true
            },
            text: {
                type: String,
                required: true
            }
        },
        emits: ["click"]
    });
</script>

<style lang="scss">
    .progress-button-container {
        text-align: right;
    }

    .progress-button {
        position: relative;
        display: inline-block;

        &.progress {
            filter: brightness(75%);

            &:hover,
            &:focus {
                cursor: not-allowed;
            }
        }

        .spinner-icon {
            position: absolute;
            top: 50%;
            left: 1rem;
        }
    }

    .progress-button__input {
        color: white;
        font-weight: bold;
        min-width: 8rem;
        padding: 0.75rem 2.5rem 0.75rem 2.5rem;
        border: 0;
        font-size: 0.95rem;
        margin-bottom: 0;
        transition: background-color 0.25s ease;
        background: gray;
    }
</style>
