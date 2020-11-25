<?php

namespace App\Http\Controllers;

use App\Actions\Fortify\PasswordValidationRules;
use App\Models\Food;
use App\Models\Recipe;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    use PasswordValidationRules;
    public function index()
    {
        $user = Auth::user();
        return view("origin.profil", compact("user"));
    }

    public function edit()
    {
        $user = Auth::user();
        return view("origin.edit_profile", compact("user"));
    }

    public function store(Request $request)
    {

        $request->validate([
            'name' => ['required', 'string', 'max:255'],
        ]);
        $user = Auth::user();


        $user->name = $request->input('name');
        if ($request->input('password') == null){

        }
        else{
            $user->password =  Hash::make($request->input('password'));
        }

        $user->gender = $request->input('gender');
        $user->weight = $request->input('weight');
        $user->height = $request->input('height');
        $user->activity = $request->input('activity');
        $user->household = $request->input('household');
        $user->update();

        return back()->with("messages",["User updated!"]);

    }

}
