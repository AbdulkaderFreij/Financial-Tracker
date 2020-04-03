<?php

namespace App;

use Laravel\Passport\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use HasApiTokens, Notifiable;
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password','currencies_id'
    ];
    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];


    //  public function profile()
    // {
    //     return $this->hasOne(Profile::class, 'user_id', 'id');
    // }


    public function transactions()
    {
        return $this->hasMany(Transaction::class, 'user_id', 'id');
    }

    public function currencies()
    {
        return $this->belongsTo(Currency::class, 'currency_id', 'id');
    }


    public function categories()
    {
        return $this->hasMany(Category::class, 'user_id', 'id');
    }
}
