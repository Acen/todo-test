const mix = require('laravel-mix');

mix.disableNotifications();

mix.sass('resources/sass/app.scss', 'public/css')
   .js('resources/js/app.js', 'public/js')
   .extract([
       'vue',
       'axios',
       'element-ui',
       'vuex',
       'vue-router',
       'async-validator',
       'lodash',
       'popper.js',
   ]);

if (mix.inProduction()) {
    mix.version();
}

