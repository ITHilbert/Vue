const dotenvExpand = require('dotenv-expand');
dotenvExpand(require('dotenv').config({ path: '../../.env' /*, debug: true */ }));

const mix = require('laravel-mix');

mix.js(__dirname + 'src/Resources/vue/vuecomponents.js', __dirname + '/src/Resources/js/vuecomponents.js').vue();
mix.sass(__dirname + '/src/Resources/sass/vuecomponents.scss', __dirname + '/src/Resources/css/vuecomponents.css');
