export default function Projet() {
    return {
        filters: [],
        projets: [],
        lightbox: false,

        init(){
            fetch('./public/data.json')
                .then(response => response.json())
                .then(json => {
                    this.projets = json;
                });
        },

        addRemoveFilters(filter) {
            if (this.filters.includes(filter)) {
                this.filters = this.filters.filter(f => f !== filter);
            } else {
                this.filters.push(filter);
            }
            this.filterProjet();
        },

        filterProjet() {
            if (this.filters.length === 0) {
                return this.projets;
            }
            return this.projets.filter(projet => {
                //console.log(this.filters.includes(projet.category));
                return this.filters.includes(projet.category);
            }
            );
        },
        checkFilter(filter) {
            return this.filters.includes(filter);
        },
        lightboxZoom(){
            this.lightbox = !this.lightbox;
        }
    };
};
