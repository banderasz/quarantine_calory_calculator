<?php

namespace Database\Factories;

use App\Models\Food;
use App\Models\FoodHousehold;
use App\Models\Household;
use Illuminate\Database\Eloquent\Factories\Factory;

class FoodHouseholdFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = FoodHousehold::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $food_ids = Food::all()->modelKeys();
        $household_ids = Household::all()->modelKeys();
        return [
            'food_id' => $this->faker->randomElement($food_ids),
            'household_id' => $this->faker->randomElement($household_ids),
            'weight' => $this->faker->randomFloat(2,0,1000)
        ];
    }
}
