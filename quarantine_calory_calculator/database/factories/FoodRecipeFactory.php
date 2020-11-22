<?php

namespace Database\Factories;

use App\Models\FoodRecipe;
use App\Models\Food;
use App\Models\Recipe;
use Illuminate\Database\Eloquent\Factories\Factory;

class FoodRecipeFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = FoodRecipe::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $food_ids = Food::all()->modelKeys();
        $recipe_ids = Recipe::all()->modelKeys();
        return [
            'food_id' => $this->faker->randomElement($food_ids),
            'recipe_id' => $this->faker->randomElement($recipe_ids),
            'weight' => $this->faker->randomFloat(2,0,1000)
        ];
    }
}
