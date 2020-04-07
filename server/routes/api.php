<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/login', 'UserController@login')->name('login');
Route::post('/register', 'UserController@register');


Route::group(['middleware' => 'auth:api'], function(){
Route::get('/logout', 'UserController@logout')->name('logout');
Route::get('/currencies', 'CurrencyController@index')->name('currencies.all');

Route::get('/transactions', 'TransactionController@index')->name('transactions.all');
Route::post('/transactions', 'TransactionController@store')->name('transactions.store');
Route::get('/transactions/{transaction}', 'TransactionController@show')->name('transactions.show');
Route::put('/transactions/{transaction}', 'TransactionController@update')->name('transactions.update');
Route::delete('/transactions/{transaction}', 'TransactionController@destroy')->name('transactions.destroy');

Route::get('/categories', 'CategoryController@index')->name('categories.all');
Route::post('/categories', 'CategoryController@store')->name('categories.store');
Route::get('/categories/{category}', 'CategoryController@show')->name('categories.show');
Route::put('/categories/{category}', 'CategoryController@update')->name('categories.update');
Route::delete('/categories/{category}', 'CategoryController@destroy')->name('categories.destroy');
});


