<?php

namespace ITHilbert\Vue;

use Illuminate\Support\ServiceProvider;

class VueServiceProvider extends ServiceProvider
{

    /**
     * Boot the application events.
     *
     * @return void
     */
    public function boot()
    {
        //Vue Compontents kopieren nach Public
        $this->publishes([
            __DIR__ .'/assets' => public_path('vendor/vue'),
        ]);

        //Ressources js
        $this->publishes([
            __DIR__.'/Resources/vue' => resource_path('js/vendor/vue'),
        ]);

        //Ressources Sass
        $this->publishes([
            __DIR__.'/Resources/sass' => resource_path('sass/vendor/vue'),
        ]);



        //Commands Registrieren
        $this->commands( \ITHilbert\Vue\App\Console\Commands\VueCopyFiles::class );
        //Register Routes
        $this->loadRoutesFrom(__DIR__ . '/Routes/web.php');
        //Register Views
        $this->loadViewsFrom(__DIR__ .'/Resources/views', 'vue');
    }
}
