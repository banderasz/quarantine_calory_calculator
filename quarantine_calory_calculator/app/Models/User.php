<?php

namespace App\Models;

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
        return $this->weight / ($this->height/100) ** 2;
    }

    public function getCaloryDemandAttribute()
    {
        if ($this->activity == "low"){
            $act = 1.2;
        }
        elseif ($this->activity == "moderate"){
            $act = 1.55;
        }
        else{
            $act = 1.8;
        }
        if ($this->gender == "woman"){
            return ($this->weight * 10 + $this->height * 6.25 - 300)*$act;
        }
        else{
            return ($this->weight * 10 + $this->height * 6.25 - 150)*$act;
        }

    }

    public function getProteinDemandAttribute()
    {
        return $this->CaloryDemand/2100 * 50;

    }public function getCarbDemandAttribute()
    {
        return $this->CaloryDemand/2100 * 310;

    }public function getFatDemandAttribute()
    {
        return $this->CaloryDemand/2100 * 70;

    }public function getSugarDemandAttribute()
    {
        return $this->CaloryDemand/2100 * 90;

    }public function getFiberDemandAttribute()
    {
        return $this->CaloryDemand/2100 * 30;

    }public function getWaterDemandAttribute()
    {
        return $this->CaloryDemand/2100 * 1500;

    }

    public function foods(){
        return $this->belongsToMany(Food::class, "food_users")->withPivot("weight");
    }
}
