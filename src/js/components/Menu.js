export default function Menu() {
    return {
        headerResponsive: false,

        toggleHeaderResponsive() {
            this.headerResponsive = !this.headerResponsive;
        }
    };
};
