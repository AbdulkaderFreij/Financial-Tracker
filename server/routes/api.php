<?php

use Illuminate\Http\Request;
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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/login', 'UserController@login')->name('login');
Route::post('/register', 'UserController@register');

Route::get('/transactions', 'TransactionController@index')->name('transactions.all');

Route::post('/transactions', 'TransactionController@store')->name('transactions.store');

Route::get('/transactions/{transaction}', 'TransactionController@show')->name('transactions.show');

Route::put('/transactions/{transaction}', 'TransactionController@update')->name('transactions.update');

Route::delete('/transactions/{transaction}', 'TransactionController@destroy')->name('transactions.destroy');

Route::group(['middleware' => 'auth:api'], function(){
    Route::get('/logout', 'UserController@logout')->name('logout');
});


