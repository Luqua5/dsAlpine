import Alpine from "alpinejs";
import EditorPreview from "./components/EditorPreview";
import FlightTable from "./components/FlightTable";
import Slider from "./components/Slider";
import Menu from "./components/Menu";
import Lazy from "./components/Lazy";
import Tabs from "./components/Tabs";
import intersect from "@alpinejs/intersect";
import persist from "@alpinejs/persist";

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
    data('EditorPreview', EditorPreview);
    data('Lazy', Lazy);
    data('FlightTable', FlightTable);
    data('Slider', Slider);
    data('Menu', Menu);
    data('Tabs', Tabs);
    start();
});
