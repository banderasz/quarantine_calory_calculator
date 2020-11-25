<?php

namespace App\Http\Controllers;

use App\Models\Food;
use Illuminate\Http\Request;

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
     * @param  \Illuminate\Http\Request  $request
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

        return back()->with("messages",["Recipe succesfully saved!"]);

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
