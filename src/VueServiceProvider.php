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

        //Ressources js und sass
        $this->publishes([
            __DIR__.'/vue' => resource_path('vue'),
        ]);


        //Commands Registrieren
        $this->commands( \ITHilbert\Vue\App\Console\Commands\VueCopyFiles::class );
    }
}
