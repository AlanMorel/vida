import { createApp } from "vue";
import Dev from "./serve.vue";

import Vida from "@/entry.esm";

const app = createApp(Dev);
app.use(Vida);

app.mount("#app");
