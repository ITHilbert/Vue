<?php

use Illuminate\Support\Facades\Route;
use \ITHilbert\Vue\Http\Controllers\VueController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::middleware(['web', 'auth'])->group(function () {
    Route::get('vue', [VueController::class, 'vue'])->name('vue');
    Route::get('vue-submit', [VueController::class, 'vuesubmit'])->name('vue-submit');
});

