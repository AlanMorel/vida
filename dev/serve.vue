<template>
    <div>
        <SpinnerIcon theme="dark" />
        <EyeClosedIcon />
        <EyeOpenedIcon />
    </div>
</template>

<script>
    import { defineComponent } from "vue";

    import SpinnerIcon from "@/components/icons/SpinnerIcon";
    import EyeClosedIcon from "@/components/icons/EyeClosedIcon";
    import EyeOpenedIcon from "@/components/icons/EyeOpenedIcon";

    export default defineComponent({
        name: "Serve",
        components: {
            SpinnerIcon,
            EyeClosedIcon,
            EyeOpenedIcon
        }
    });
</script>
