<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
class Profile extends Model
{
    protected $guarded=[];
    protected $fillable = ['name', 'image','users_id', 'currencies_id'];
    public function profileImage(){
        $imagePath=($this->image) ?  $this->image : "";
        return '/storage/' . $imagePath;
    }

    public function user(){
        return $this->belongsTo(User::class);
    }
    public function currencies(){
        return $this->hasMany(Currency::class);
    }
}
