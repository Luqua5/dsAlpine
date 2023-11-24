export default function Tabs() {
    function assignAttributeToElements(selector, attributeSetter) {
        let tabId = 1;
        this.$el.querySelectorAll(selector).forEach(item => {
            attributeSetter(item, tabId);
            tabId++;
        });
    }

    return {
        currentTab: this.$persist(1),
        init() {
            this.assignAttributeToElements('.tab-link', (element, id) => element.dataset.tabId = id);
            this.assignAttributeToElements('.tab-content', (element, id) => element.dataset.tabId = id);
            this.assignAttributeToElements('.tab-select option', (element, id) => element.value = id);
        },
        assignAttributeToElements,
        openTab(event) {
            this.currentTab = this.currentTabId;
        },
        get currentTabId() {
            let element = this.$el;
            let isSelectElement = element.tagName.toLowerCase() === 'select';
            return parseInt(isSelectElement ? element.value : element.dataset.tabId) || 1;
        },
        get isCurrentTab() {
            return this.currentTab === this.currentTabId;
        }
    };
};
