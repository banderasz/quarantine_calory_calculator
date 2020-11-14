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
    return view('welcome');
});

Route::middleware(['auth:sanctum', 'verified'])->get('/dashboard', function () {
    return view('dashboard');
})->name('dashboard');

Route::middleware(['auth:sanctum', 'verified'])->group(function () {

////Route::post("/joinnow","JoinNowController@register")->name("joinnow-post");
//Route::post("/joinnow",function(Request $request){
//    $request-input("name");
//    $request-validate()
//
//    new User----
//
//    return redirect("")-with("message", "User saved!");
//})->name("joinnow-post");



});

Route::get("/home", function(){
    return view("origin.home");
})->name("home");

Route::get("/joinnow", function(){
    return view("origin.joinnow");
})->name("joinnow");

Route::get("/signin", function(){
    return view("origin.signin");
})->name("signin");
