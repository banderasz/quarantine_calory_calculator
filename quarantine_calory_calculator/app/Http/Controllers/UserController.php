<?php

namespace App\Http\Controllers;

use App\Models\Food;
use App\Models\Recipe;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function index()
    {
        $user = Auth::user();
        $foods = Food::all();
        $recipes = Recipe::all();
        return view("origin.nutrition", compact("user", "foods", "recipes"));
    }


}
