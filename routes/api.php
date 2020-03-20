<?php

use App\Country;
use App\Http\Resources\PlayerClasification as PlayerClasificationResource;
use App\Player;
use App\User;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/players', 'PlayerController@index');

Route::get('/players/{player}', 'PlayerController@show');

Route::get('/players/{player}/classification', 'PlayerController@classification');

Route::get('/players/{player}/utr', 'PlayerController@utr');

Route::get('/players/{player}/classification/tennis', 'PlayerClasificationController@tennis');

Route::get('/users', function () {
    return User::all();
});

Route::get('/users/{user}', function (User $user) {
    return $user;
});

Route::get('/players/{player}/country', function (Player $player) {
    return $player->country;
});


Route::get('/countries', function () {
    return Country::all();
});

Route::get('/countries/{country}', function (Country $country) {
    return $country;
});
