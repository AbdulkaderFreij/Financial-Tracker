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
        'username', 'name', 'image', 'email', 'password', 'currencies_id'
    ];
    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function image(){
        $imagePath=($this->image) ?  $this->image : "";
        return '/storage/' . $imagePath;
    }

    public function transactions()
    {
        return $this->hasMany(Transaction::class, 'users_id', 'id');
    }

    public function currency()
    {
        return $this->belongsTo(Currency::class, 'currencies_id', 'id');
    }

    public function categories()
    {
        return $this->hasMany(Category::class, 'users_id', 'id');
    }
}
