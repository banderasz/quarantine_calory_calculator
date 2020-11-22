<?php

namespace Database\Factories;

use App\Models\Food;
use Illuminate\Database\Eloquent\Factories\Factory;

class FoodFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Food::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $protein_dummy = $this->faker->randomFloat(4,0,100);
        $fat_dummy = $this->faker->randomFloat(4,0,100);
        $carb_dummy = $this->faker->randomFloat(4,0,100);
        $water_dummy = $this->faker->randomFloat(4,0,100);
        $fiber_dummy = $this->faker->randomFloat(4,0,100);
        $random_dummy = $this->faker->randomFloat(4,0,100);
        $total_dummy = ($protein_dummy + $fat_dummy + $carb_dummy + $water_dummy + $fiber_dummy + $random_dummy)/100;

        return [
            'name' => $this->faker->word(),
            'protein' => $protein_dummy/$total_dummy,
            'fat' => $fat_dummy/$total_dummy,
            'carb' => $carb_dummy/$total_dummy,
            'fiber' => $fiber_dummy/$total_dummy,
            'water' => $water_dummy/$total_dummy,
            'sugar' => $this->faker->randomFloat(2,0,$carb_dummy/$total_dummy),
            'type' => $this->faker->randomElement(["food", "drink"])
        ];
    }
}
