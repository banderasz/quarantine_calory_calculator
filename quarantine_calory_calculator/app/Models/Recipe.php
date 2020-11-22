<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Recipe extends Model
{
    use HasFactory;
    public function foods(){
        return $this->belongsToMany(Food::class, "food_recipes")->withPivot("weight");
    }

    public function getSummaWeightAttribute()
    {
        $weight = 0;
        foreach ($this->foods as $food){
            $weight += $food->pivot->weight;
        }
        return $weight;
    }
}
