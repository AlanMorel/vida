<template>
    <div>
        <Vida />
        <FormInput forText="test" placeholder="Username">
            <input type="text" />
        </FormInput>
        <SpinnerIcon theme="dark" />
        <EyeClosedIcon />
        <EyeOpenedIcon />
        <ProgressButton text="Hello!" :progress="true" />
        <StrengthIndicator :strength="2" />
        <ValidationList :successes="successes" :errors="errors" />
    </div>
</template>

<script lang="ts">
    import { defineComponent } from "vue";

    import FormInput from "@/components/utility/FormInput.vue";
    import SpinnerIcon from "@/components/icons/SpinnerIcon.vue";
    import EyeClosedIcon from "@/components/icons/EyeClosedIcon.vue";
    import EyeOpenedIcon from "@/components/icons/EyeOpenedIcon.vue";
    import ProgressButton from "@/components/utility/ProgressButton.vue";
    import StrengthIndicator from "@/components/utility/StrengthIndicator.vue";
    import ValidationList from "@/components/utility/ValidationList.vue";

    import Vida from "@/components/Vida.vue";

    export default defineComponent({
        name: "Serve",
        components: {
            Vida,
            FormInput,
            SpinnerIcon,
            EyeClosedIcon,
            EyeOpenedIcon,
            ProgressButton,
            StrengthIndicator,
            ValidationList
        },
        setup() {
            return {
                errors: ["error 1"],
                successes: ["success 1"]
            };
        }
    });
</script>

<style lang="scss">
    body {
        margin: 1rem;
    }

    .icon {
        width: 1.25rem;
        height: 1.25rem;
    }
</style>
