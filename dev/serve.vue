<template>
    <div>
        <FormInput forText="test" placeholder="placeholder">
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

    export default defineComponent({
        name: "Serve",
        components: {
            FormInput,
            SpinnerIcon,
            EyeClosedIcon,
            EyeOpenedIcon
        }
    });
</script>
