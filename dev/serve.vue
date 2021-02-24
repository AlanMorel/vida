<template>
    <div>
        <Vida />
        <FormInput forText="test" placeholder="Username">
            <input type="text" />
        </FormInput>
        <SpinnerIcon theme="dark" />
        <EyeClosedIcon />
        <EyeOpenedIcon />
    </div>
</template>

<script>
    import { defineComponent } from "vue";

    import FormInput from "@/components/utility/FormInput";
    import SpinnerIcon from "@/components/icons/SpinnerIcon";
    import EyeClosedIcon from "@/components/icons/EyeClosedIcon";
    import EyeOpenedIcon from "@/components/icons/EyeOpenedIcon";
    import Vida from "@/components/Vida";

    export default defineComponent({
        name: "Serve",
        components: {
            Vida,
            FormInput,
            SpinnerIcon,
            EyeClosedIcon,
            EyeOpenedIcon
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
