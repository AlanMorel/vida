<template>
    <ul class="validation-list" v-if="(errors && errors.length) || (successes && successes.length)">
        <li v-for="(error, index) in errors" class="validation-list__item validation-list__item--error" :key="index">
            {{ error }}
        </li>
        <li
            v-for="(success, index) in successes"
            class="validation-list__item validation-list__item--success"
            :key="index"
        >
            {{ success }}
        </li>
    </ul>
</template>

<script>
    export default {
        name: "ValidationList",
        props: {
            errors: {
                type: Array
            },
            successes: {
                type: Array
            }
        }
    };
</script>

<style lang="scss">
    .validation-list {
        margin-bottom: 0.5rem;
        margin-top: -0.75rem;
    }

    .validation-list__item {
        display: flex;
        align-items: center;
        font-size: 0.85rem;
        font-weight: bold;
        height: 1.75rem;

        &:before {
            width: 1.25rem;
        }

        &--error {
            &:before {
                content: "×";
                color: red;
                font-size: 1.5rem;
            }
        }

        &--success {
            &:before {
                content: "✓";
                color: green;
                font-size: 1rem;
            }
        }
    }
</style>
