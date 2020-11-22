<?php

namespace App\Http\Controllers;

use App\Models\FoodUser;
use App\Models\Recipe;
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
            "weight" => "required|numeric|min:0",
        ]);
        $recipe = Recipe::find($request->input('recipe'));

        foreach ($recipe->foods() as $food) {
            $fooduser = new FoodUser();
            $fooduser->user_id = $user->id;
            $fooduser->food_id = $food->id;
            $fooduser->weight = $request->input('weight');
            $fooduser->save();
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
