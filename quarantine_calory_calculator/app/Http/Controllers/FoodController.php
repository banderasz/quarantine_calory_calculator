<?php

namespace App\Http\Controllers;

use App\Models\Food;
use App\Models\FoodHousehold;
use App\Models\FoodUser;
use App\Models\Household;
use App\Models\Recipe;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class FoodController extends Controller
{
    public function index()
    {
        $foods = Food::all()->sortBy('name');
        return view("food.index", compact('foods'));
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(Request $request)
    {
        $request->validate([
            "name" => "required|unique:food",
            "type" => "required",
            "protein" => "required|numeric|min:0|max:100",
            "fat" => "required|numeric|min:0|max:100",
            "carb" => "required|numeric|min:0|max:100",
            "fiber" => "required|numeric|min:0|max:100",
            "sugar" => "required|numeric|min:0|max:100",
            "water" => "required|numeric|min:0|max:100",

        ]);

        $food = new Food();
        $food->name = $request->input('name');
        $food->type = $request->input('type');
        $food->protein = $request->input('protein');
        $food->fat = $request->input('fat');
        $food->carb = $request->input('carb');
        $food->fiber = $request->input('fiber');
        $food->sugar = $request->input('sugar');
        $food->water = $request->input('water');
        $food->save();

        return back()->with("messages", ["Recipe succesfully saved!"]);

    }

    public function store_nutrition(Request $request)
    {
        $user = Auth::user();
        $request->validate([
            "weight" => "required|numeric|gt:0",
        ]);
        $food = Food::find($request->input('food'));
        $foodusers = FoodUser::all();

        $household = Household::where('name', '=', $user->household)->firstOrFail();
        $foodhouseholds = FoodHousehold::all();

        $flag = false;
        foreach ($foodusers as $savedfooduser) {
            if ($savedfooduser->food_id == $food->id && $savedfooduser->user_id == $user->id && $savedfooduser->created_at >= Carbon::today()) {
                $savedfooduser->weight += $request->input('weight');
                $savedfooduser->save();
                $flag = true;
            }
        }
        if (!$flag) {
            $fooduser = new FoodUser();
            $fooduser->user_id = $user->id;
            $fooduser->food_id = $food->id;
            $fooduser->weight = $request->input('weight');
            $fooduser->save();
        }

        foreach ($foodhouseholds as $savedfoodhousehold) {
            if ($savedfoodhousehold->food_id == $food->id && $savedfoodhousehold->household_id == $household->id) {
                if ($savedfoodhousehold->weight - $request->input('weight') > 0) {
                    $savedfoodhousehold->weight -= $request->input('weight');
                    $savedfoodhousehold->save();
                } else {
                    $savedfoodhousehold->delete();
                }


            }
        }


        return back()->with("messages", ["Nutritions succesfully saved!"]);
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
