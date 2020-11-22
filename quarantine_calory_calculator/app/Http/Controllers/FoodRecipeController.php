<?php

namespace App\Http\Controllers;

use App\Models\Food;
use App\Models\FoodRecipe;
use App\Models\Recipe;
use Illuminate\Http\Request;

class FoodRecipeController extends Controller
{
    public function store(Request $request)
    {

        $request->validate([
            "recipe_id" => "required|exists:recipes,id",
            "food_id"   => "required|array",
            "food_id.*" => "required|exists:food,id", // ide lehetne még egy 'distinct' szabály is, de az baromira megbonyolítja a hibák kijellzését, szóval inkább engedjük el
            "weight"    => "required|array",
            "weight.*"  => "required|numeric|min:0",
        ]);

        $recipe_id = $request->input("recipe_id");
        $food_ids = $request->input("food_id");
        $weight = $request->input("weight");

        for ($i = 0; $i < count($food_ids); $i++) {

            if (Recipe::findOrFail($recipe_id)->foods->find($food_ids[$i])) {
                $foodrecipe = FoodRecipe::whereFoodId($food_ids[$i])->whereRecipeId($recipe_id)->first();
                $foodrecipe->weight += $weight[$i];
                $foodrecipe->save();
            } else {
                $foodrecipe = new FoodRecipe();
                $foodrecipe->recipe_id = $recipe_id;
                $foodrecipe->food_id = $food_ids[$i];
                $foodrecipe->weight = $weight[$i];
                $foodrecipe->save();
            }

        }

        return back()->with("messages", ["Food was successfully added!"]);
    }
}
