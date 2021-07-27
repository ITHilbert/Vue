const dotenvExpand = require('dotenv-expand');
dotenvExpand(require('dotenv').config({ path: '../../.env' /*, debug: true */ }));

const mix = require('laravel-mix');

mix.js(__dirname + 'src/vue/components/vuecomponents.js', __dirname + '/src/assets/vuecomponents.js').vue();
mix.sass(__dirname + '/src/vue/sass/vuecomponents.scss', __dirname + '/src/assets/vuecomponents.css');