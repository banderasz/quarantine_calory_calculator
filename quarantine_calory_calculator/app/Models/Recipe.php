<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Recipe extends Model
{
    use HasFactory;
    public function foods(){
        dd($this->belongsToMany(Food::class, "food_recipes")->withPivot("weight"));
        return $this->belongsToMany(Food::class, "food_recipes")->withPivot("weight");
    }
}
