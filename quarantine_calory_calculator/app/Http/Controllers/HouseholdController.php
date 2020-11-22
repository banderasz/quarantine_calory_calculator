<?php

namespace App\Http\Controllers;

use App\Models\Food;
use App\Models\Household;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class HouseholdController extends Controller
{
    public function index()
    {
        $user = Auth::user();
        $household = Household::where('name', '=', $user->household)->firstOrFail();
        $foods = $household->foods->all();
        $all_foods = Food::all();
        $summafoodcalory = 0;
        $summausercalory = 0;
        foreach ($foods as $food){
            $summafoodcalory += $food->Calory*$food->pivot->weight;
        }
        foreach ($household->users as $user){
            $summausercalory += $user->CaloryDemand;
        }

        return view("origin.storage", compact("user", "foods", "household", "all_foods", "summafoodcalory", 'summausercalory'));
    }
}
