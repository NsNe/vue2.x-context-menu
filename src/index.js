import ContextMenu from './components/context-menu';

const contextmenu = {
    ContextMenu,
    ContextMenuItem: ContextMenu.Item
};

const install = function (Vue, opts = {}) {

    Object.keys(contextmenu).forEach((key) => {
        Vue.component(key, contextmenu[key]);
    });
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default Object.assign(contextmenu, {install});