export default {
    bind (el, binding, vnode) {
        function documentHandler (e) {
            if (el.contains(e.target)) {
                return false;
            }
            if (binding.expression) {
                binding.value(e);
            }
        }
        el.__vueClickOutside__ = documentHandler;
        document.addEventListener('mousedown', documentHandler);
    },
    update () {

    },
    unbind (el, binding) {
        document.removeEventListener('mousedown', el.__vueClickOutside__);
        delete el.__vueClickOutside__;
    }
};