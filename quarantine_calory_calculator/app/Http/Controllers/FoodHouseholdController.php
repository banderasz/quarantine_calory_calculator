<?php

namespace App\Http\Controllers;

use App\Models\Food;
use App\Models\FoodHousehold;
use App\Models\FoodUser;
use App\Models\Household;
use App\Models\Recipe;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class FoodHouseholdController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\RedirectResponse
     */
    public function store(Request $request)
    {
        $user = Auth::user();
        $request->validate([
            "weight" => "required|numeric|gt:0|max:100000",
        ]);
        $household = Household::where('name', '=', $user->household)->firstOrFail();
        $food = Food::find($request->input('food'));
        $foodhouseholds = FoodHousehold::all();
        $flag = false;
        foreach ($foodhouseholds as $savedfoodhousehold){
            if($savedfoodhousehold->food_id == $food->id && $savedfoodhousehold->household_id == $household->id){
                $savedfoodhousehold->weight += $request->input('weight');
                $savedfoodhousehold->save();
                $flag = true;
            }
        }
        if(!$flag){
            $foodhousehold = new FoodHousehold();
            $foodhousehold->household_id =$household->id;
            $foodhousehold->food_id = $food->id;
            $foodhousehold->weight = $request->input('weight');
            $foodhousehold->save();
        }




        return back()->with("messages",["Storage succesfully saved!"]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\FoodUser  $foodUser
     * @return \Illuminate\Http\Response
     */
    public function show(FoodUser $foodUser)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\FoodUser  $foodUser
     * @return \Illuminate\Http\Response
     */
    public function edit(FoodUser $foodUser)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\FoodUser  $foodUser
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, FoodUser $foodUser)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\FoodUser  $foodUser
     * @return \Illuminate\Http\Response
     */
    public function destroy(FoodUser $foodUser)
    {
        //
    }
}
