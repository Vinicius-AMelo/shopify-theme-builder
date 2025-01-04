const Store_General = {
    data: {},

    methods: {
        init() {},

        init_load() {},

        mounted() {
            return this.methods.init();
        },

        loaded() {
            return this.methods.init_load();
        },
    },
};

jQuery(() => {
    Store_General.mounted();
});

window.Store_General = Store_General;

window.lazyFunctions = {
    lazyScripts() {
        document.querySelectorAll('.e-lazy-script').forEach((script) => {
            script.src = script.getAttribute('data-src');
        });
    },
};
