<?php

use Illuminate\Support\Facades\Route;

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

Route::get('/', function () {
    return view('origin.home');
})->name("home");

Route::middleware(['auth:sanctum', 'verified'])->group(function () {

    Route::get("/profile", "App\Http\Controllers\UserController@index")->name("profile");

    Route::prefix("recipes")->group(function (){
        Route::get("index","App\Http\Controllers\RecipeController@index")->name("recipes.index");
        Route::post("store","App\Http\Controllers\RecipeController@store")->name("recipes.store");
    });

});

Route::get("/register", function(){
    return redirect("/joinnow");
})->name("register");

Route::get("/login", function(){
    return redirect("/signin");
})->name("login");

Route::get("/joinnow", function(){
    return view("origin.joinnow");
})->name("joinnow");

Route::get("/signin", function(){
    return view("origin.signin");
})->name("signin");
