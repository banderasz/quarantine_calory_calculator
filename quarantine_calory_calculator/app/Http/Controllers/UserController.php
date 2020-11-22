<?php

namespace App\Http\Controllers;

use App\Models\Food;
use App\Models\Recipe;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    public function index()
    {
        $user = Auth::user();
        return view("origin.profil", compact("user"));
    }


}
