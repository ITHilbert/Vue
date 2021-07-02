/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

window.Vue = require('vue');

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))



//Design
Vue.component('card', require('./Card.vue').default);
Vue.component('hform', require('./HForm.vue').default);
Vue.component('group', require('./group.vue').default);

//Comobobox
Vue.component('combobox', require('./input/combobox.vue').default);
Vue.component('search', require('./input/search.vue').default);

//Input
Vue.component('input-text', require('./input/input-text.vue').default);
Vue.component('input-email', require('./input/input-email.vue').default);
Vue.component('input-euro', require('./input/input-euro.vue').default);
Vue.component('input-percent', require('./input/input-percent.vue').default);
Vue.component('input-int', require('./input/input-int.vue').default);
Vue.component('input-date', require('./input/input-date.vue').default);
Vue.component('input-password', require('./input/input-password.vue').default);
Vue.component('input-number', require('./input/input-number.vue').default);
Vue.component('text-area', require('./input/text-area.vue').default);
Vue.component('checkbox', require('./input/checkbox.vue').default);
Vue.component('radiobox', require('./input/radiobox.vue').default);
Vue.component('input-hidden', require('./input/input-hidden.vue').default);
Vue.component('hlabel', require('./input/hlabel.vue').default);
Vue.component('editor', require('./editor.vue').default);

//Buttons
Vue.component('hbutton', require('./buttons/HButton.vue').default);
Vue.component('button-create', require('./buttons/button-create.vue').default);
Vue.component('button-show', require('./buttons/button-show.vue').default);
Vue.component('button-edit', require('./buttons/button-edit.vue').default);
Vue.component('button-delete', require('./buttons/button-delete.vue').default);
Vue.component('button-save', require('./buttons/button-save.vue').default);
Vue.component('button-back', require('./buttons/button-back.vue').default);
Vue.component('button-submit', require('./buttons/button-submit.vue').default);
Vue.component('button-cancel', require('./buttons/button-cancel.vue').default);
Vue.component('button-reset', require('./buttons/button-reset.vue').default);


//Show
Vue.component('txt', require('./show/show-text.vue').default);
Vue.component('euro', require('./show/show-euro.vue').default);
Vue.component('datum', require('./show/show-date.vue').default);

//Dialoge
Vue.component('dialog-delete', require('./dialog/delete.vue').default);



/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#vue-app',
});