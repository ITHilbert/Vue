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
        //Vue nach Public
        $this->publishes([
            __DIR__ .'/Resources/js' => resource_path('js/vendor/vue'),
            __DIR__ .'/Resources/css' => resource_path('css/vendor/vue'),
            __DIR__.'/Resources/vue' => resource_path('vue/vendor/vue'),
            __DIR__.'/Resources/sass' => resource_path('sass/vendor/vue'),
        ]);


        //Vue nach Public
        $this->publishes([
            resource_path('js/vendor/vue') => public_path('vendor/vue'),
            resource_path('css/vendor/vue') => public_path('vendor/vue'),
        ]);


        //Commands Registrieren
        $this->commands( \ITHilbert\Vue\App\Console\Commands\VueCopyFiles::class );
        //Register Routes
        $this->loadRoutesFrom(__DIR__ . '/Routes/web.php');
        //Register Views
        $this->loadViewsFrom(__DIR__ .'/Resources/views', 'vue');
    }
}
