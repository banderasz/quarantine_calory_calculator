<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Fortify\TwoFactorAuthenticatable;
use Laravel\Jetstream\HasProfilePhoto;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens;
    use HasFactory;
    use HasProfilePhoto;
    use Notifiable;
    use TwoFactorAuthenticatable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'weight',
        'height',
        'household',
        'gender',
        'activity',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
        'two_factor_recovery_codes',
        'two_factor_secret',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
     * The accessors to append to the model's array form.
     *
     * @var array
     */
    protected $appends = [
        'profile_photo_url',
    ];

    public function getBMIAttribute()
    {
        return $this->weight / ($this->height / 100) ** 2;
    }
    public function getCaloryDemandAttribute()
    {
        if ($this->activity == "low") {
            $act = 1.2;
        } elseif ($this->activity == "moderate") {
            $act = 1.55;
        } else {
            $act = 1.8;
        }
        if ($this->gender == "woman") {
            return round(($this->weight * 10 + $this->height * 6.25 - 300) * $act, 2);
        } else {
            return round(($this->weight * 10 + $this->height * 6.25 - 150) * $act, 2);
        }

    }

    public function getProteinDemandAttribute()
    {
        return round($this->CaloryDemand / 2100 * 50, 2);

    }

    public function getCarbDemandAttribute()
    {
        return round($this->CaloryDemand / 2100 * 310, 2);

    }

    public function getFatDemandAttribute()
    {
        return round($this->CaloryDemand / 2100 * 70, 2);

    }

    public function getSugarDemandAttribute()
    {
        return round($this->CaloryDemand / 2100 * 90, 2);

    }

    public function getFiberDemandAttribute()
    {
        return round($this->CaloryDemand / 2100 * 30, 2);

    }

    public function getWaterDemandAttribute()
    {
        return round($this->CaloryDemand / 2100 * 1500, 2);

    }

    public function foods()
    {
        return $this->belongsToMany(Food::class, "food_users")->withPivot("weight", "created_at", "updated_at");
    }

    public function getCalorySumTodayAttribute()
    {
        $sum = 0;
        foreach ($this->foods->where("created_at", ">=", Carbon::today()) as  $food){
            $sum += $food->Calory*$food->pivot->weight/100;
        }
        return $sum;
    }

    public function getProteinSumTodayAttribute()
    {
        $sum = 0;
        foreach ($this->foods->where("created_at", ">=", Carbon::today()) as  $food){
            $sum += $food->protein*$food->pivot->weight/100;
        }
        return $sum;
    }

    public function getCarbSumTodayAttribute()
    {
        $sum = 0;
        foreach ($this->foods->where("created_at", ">=", Carbon::today()) as  $food){
            $sum += $food->carb*$food->pivot->weight/100;
        }
        return $sum;
    }

    public function getFatSumTodayAttribute()
    {
        $sum = 0;
        foreach ($this->foods->where("created_at", ">=", Carbon::today()) as  $food){
            $sum += $food->fat*$food->pivot->weight/100;
        }
        return $sum;
    }

    public function getSugarSumTodayAttribute()
    {
        $sum = 0;
        foreach ($this->foods->where("created_at", ">=", Carbon::today()) as  $food){
            $sum += $food->sugar*$food->pivot->weight/100;
        }
        return $sum;
    }

    public function getFiberSumTodayAttribute()
    {
        $sum = 0;
        foreach ($this->foods->where("created_at", ">=", Carbon::today()) as  $food){
            $sum += $food->fiber*$food->pivot->weight/100;
        }
        return $sum;
    }

    public function getWaterSumTodayAttribute()
    {
        $sum = 0;
        foreach ($this->foods->where("created_at", ">=", Carbon::today()) as  $food){
            $sum += $food->water*$food->pivot->weight/100;
        }
        return $sum;
    }
}
