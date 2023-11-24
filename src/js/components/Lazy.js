export default function Lazy() {
    return {
        src: 'data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==',
        load() {
            this.src = this.$el.dataset.src;
        },
    };
};
