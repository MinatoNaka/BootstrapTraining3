let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

mix.sass('src/scss/bootstrap.scss', 'dist/build/css')
    .sass('src/scss/fontawesome.scss', 'dist/build/css')
    .sass('node_modules/slick-carousel/slick/slick.scss', 'dist/build/css')
    .sass('node_modules/slick-carousel/slick/slick-theme.scss', 'dist/build/css')
    .sass('src/scss/app.scss', 'dist/build/css')
    .styles([
        'dist/build/css/bootstrap.css',
        'dist/build/css/fontawesome.css',
        'dist/build/css/slick.css',
        'dist/build/css/slick-theme.css',
        'dist/build/css/app.css',
    ], 'dist/build/css/bundle.css')
    .scripts([
        'node_modules/jquery/dist/jquery.min.js',
        'node_modules/popper.js/dist/umd/popper.min.js',
        'node_modules/bootstrap/dist/js/bootstrap.min.js',
        'node_modules/slick-carousel/slick/slick.js',
        'src/js/app.js',
    ], 'dist/build/js/bundle.js');
