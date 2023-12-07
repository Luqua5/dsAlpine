export default function FAQ() {
    return {
        isOpen: false,

        toggleOpen() {
            this.isOpen = !this.isOpen;
        }
    }
}
