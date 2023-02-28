<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\StatsController;

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
Route::get('/v2', function () {
    return view('app');
});
Route::get('/', function () {
        return view('index');
    });
Route::post('/login', [AuthController::class, 'auth']);

Route::get('/statistics', [StatsController::class, 'stats']);
