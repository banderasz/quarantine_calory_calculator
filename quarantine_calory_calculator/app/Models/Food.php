<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * Class Food
 * @package App\Models
 * @property string protein
 */
class Food extends Model
{
    use HasFactory;

    /**
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function recipes(){
        return $this->belongsToMany(Recipe::class, "food_recipes")->withPivot("weight");
    }


    /**
     * @return float|int
     */
    public function getCaloryAttribute()
    {
        return $this->protein * 4 + $this->fat * 9 + $this->carb * 4 + $this->fiber * 2;
    }
}
