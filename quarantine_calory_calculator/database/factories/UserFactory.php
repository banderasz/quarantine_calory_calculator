<?php

namespace Database\Factories;

use App\Models\Household;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class UserFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = User::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $household_names = Household::pluck('name');
        return [
            'name' => $this->faker->name,
            'weight' => $this->faker->randomFloat(2,50,120),
            'height' => $this->faker->randomFloat(2,140,200),
            'gender' => $this->faker->randomElement(["man", "woman"]),
            'activity' => $this->faker->randomElement(["low", "moderate", "high"]),
            'household' => $this->faker->randomElement($household_names),
            'email' => $this->faker->unique()->safeEmail,
            'email_verified_at' => now(),
            'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
            'remember_token' => Str::random(10),
        ];
    }
}
