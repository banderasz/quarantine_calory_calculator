<?php

namespace App\Http\Controllers;

use App\Models\FoodHousehold;
use App\Models\FoodUser;
use App\Models\Household;
use App\Models\Recipe;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class FoodUserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $user = Auth::user();
        $foods = $user->foods->where("created_at",">=",Carbon::today());


        $recipes = Recipe::all();
        return view("origin.nutrition", compact("user", "foods", "recipes"));
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
            "weight" => "required|numeric|gt:0",
        ]);
        $recipe = Recipe::find($request->input('recipe'));
        $foodusers = FoodUser::all();

        $household = Household::where('name', '=', $user->household)->firstOrFail();
        $foodhouseholds = FoodHousehold::all();

        foreach ($recipe->foods as $food) {
            $flag = false;
            foreach ($foodusers as $savedfooduser){
                if($savedfooduser->food_id == $food->id && $savedfooduser->user_id == $user->id){
                    $savedfooduser->weight += $request->input('weight')*$food->pivot->weight/$recipe->SummaWeight;
                    $savedfooduser->save();
                    $flag = true;
                }
            }
            if(!$flag){
                $fooduser = new FoodUser();
                $fooduser->user_id = $user->id;
                $fooduser->food_id = $food->id;
                $fooduser->weight = $request->input('weight')*$food->pivot->weight/$recipe->SummaWeight;
                $fooduser->save();
            }

            foreach ($foodhouseholds as $savedfoodhousehold){
                if($savedfoodhousehold->food_id == $food->id && $savedfoodhousehold->household_id == $household->id){
                    if ($savedfoodhousehold->weight - $request->input('weight')*$food->pivot->weight/$recipe->SummaWeight > 0){
                        $savedfoodhousehold->weight -= $request->input('weight')*$food->pivot->weight/$recipe->SummaWeight;
                        $savedfoodhousehold->save();
                    }
                    else{
                        $savedfoodhousehold->delete();
                    }


                }
            }

        }



        return back()->with("messages",["Nutritions succesfully saved!"]);
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
