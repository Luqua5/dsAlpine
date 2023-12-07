import Alpine from "alpinejs";
import Menu from "./components/Menu";
import Projet from "./components/Projet";
import intersect from "@alpinejs/intersect";
import persist from "@alpinejs/persist";
import FAQ from "./components/FAQ";
import Form from "./components/Form";

window.Alpine = Alpine;

window.addEventListener('DOMContentLoaded', () => {
    const {alpineInitialized, Alpine} = window;
    if (alpineInitialized) {
        return;
    }

    window.alpineInitialized = true;
    const {data, start, plugin} = Alpine;
    plugin(intersect);
    plugin(persist);
    data('Menu', Menu);
    data('Projet', Projet);
    data('FAQ', FAQ);
    data('Form', Form);
    start();
});
