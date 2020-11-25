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
    Route::get("/profile.edit", "App\Http\Controllers\UserController@edit")->name("profile.edit");
    Route::post("/profile.store", "App\Http\Controllers\UserController@store")->name("profile.store");

    Route::get("/nutrition", "App\Http\Controllers\FoodUserController@index")->name("nutrition");
    Route::post("/nutrition.store", "App\Http\Controllers\FoodUserController@store")->name("nutrition.store");

    Route::get("/household", "App\Http\Controllers\HouseholdController@index")->name("household");
    Route::post("/storage.store", "App\Http\Controllers\FoodHouseholdController@store")->name("storage.store");

    Route::prefix("recipes")->group(function (){
        Route::get("","App\Http\Controllers\RecipeController@index")->name("recipes");
        Route::post("store","App\Http\Controllers\RecipeController@store")->name("recipes.store");
        Route::get("show/{recipe}","App\Http\Controllers\RecipeController@show")->name("recipes.show");
        Route::post("foods/store","App\Http\Controllers\FoodRecipeController@store")->name("recipes.food.store");
    });

    Route::prefix("food")->group(function (){
        Route::get("","App\Http\Controllers\FoodController@index")->name("food");
        Route::post("store","App\Http\Controllers\FoodController@store")->name("food.store");
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

Route::get("/aboutus", function(){
    return view("origin.aboutus");
})->name("aboutus");
