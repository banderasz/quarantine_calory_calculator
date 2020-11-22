<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Household extends Model
{
    use HasFactory;

    /**
     * @var mixed
     */
    private $name;

    public function foods()
    {
        return $this->belongsToMany(Food::class, "food_households")->withPivot("weight");
    }

    public function users(){
        dd($this->hasMany('App\Models\User', "name"));
        return $this->hasMany('App\Models\User', "name");
    }
}
