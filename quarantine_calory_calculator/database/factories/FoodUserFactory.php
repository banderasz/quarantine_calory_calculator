<?php

namespace Database\Factories;

use App\Models\Food;
use App\Models\FoodUser;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class FoodUserFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = FoodUser::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $food_ids = Food::all()->modelKeys();
        $user_ids = User::all()->modelKeys();
        return [
            'food_id' => $this->faker->randomElement($food_ids),
            'user_id' => $this->faker->randomElement($user_ids),
            'logged_at' => $this->faker->dateTime(),
            'weight' => $this->faker->randomFloat(2,0,1000)
        ];
    }
}
