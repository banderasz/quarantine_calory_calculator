<?php

namespace App\Actions\Fortify;

use App\Models\Household;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Laravel\Fortify\Contracts\CreatesNewUsers;

class CreateNewUser implements CreatesNewUsers
{
    use PasswordValidationRules;

    /**
     * Validate and create a newly registered user.
     *
     * @param  array  $input
     * @return \App\Models\User
     */
    public function create(array $input)
    {

        Validator::make($input, [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => $this->passwordRules(),
        ])->validate();

        $household_names = Household::pluck('name')->toArray();
        if (!in_array($input['household'], $household_names)) {
            $household = new Household;

            $household->name = $input['household'];

            $household->save();
        }


        return User::create([
            'name' => $input['name'],
            'email' => $input['email'],
            'password' => Hash::make($input['password']),
            'gender' =>  $input['gender'],
            'weight' =>  $input['weight'],
            'height' =>  $input['height'],
            'activity' =>  $input['activity'],
            'household' =>  $input['household'],
        ]);
    }
}
