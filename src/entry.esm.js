import * as components from "@/components";

const install = function installVida(app) {
    Object.entries(components).forEach(([componentName, component]) => {
        app.component(componentName, component);
    });
};

export default {
    install
};

export * from "@/components";
