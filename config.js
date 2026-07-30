'use strict';
const Store = require('electron-store');

module.exports = new Store({
    defaults: {
        activeTabs: [],
        hideNavigator: false,
        hideProjects: false,
        hidePages: false,
        hideDeck: false,
        hideEditPanel: false,
        hideTabs: false,
        zenMode: false
    }
});
