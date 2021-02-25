<template>
    <div>
        <Vida />
        <FormInput forText="test" placeholder="Username">
            <input type="text" />
        </FormInput>
        <SpinnerIcon theme="dark" />
        <EyeClosedIcon />
        <EyeOpenedIcon />
        <ProgressButton text="Hello!" :progress="false" />
        <StrengthIndicator :strength="2" />
        <ValidationList :successes="successes" :errors="errors" />
    </div>
</template>

<script>
    import { defineComponent } from "vue";

    import FormInput from "@/components/utility/FormInput";
    import SpinnerIcon from "@/components/icons/SpinnerIcon";
    import EyeClosedIcon from "@/components/icons/EyeClosedIcon";
    import EyeOpenedIcon from "@/components/icons/EyeOpenedIcon";
    import ProgressButton from "@/components/utility/ProgressButton";
    import StrengthIndicator from "@/components/utility/StrengthIndicator";
    import ValidationList from "@/components/utility/ValidationList";

    import Vida from "@/components/Vida";

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
