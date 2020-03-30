<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Profile extends Model
{
    protected $guarded=[];
    protected $fillable = [
        'first_name', 'last_name', 'phone_number', 'image', 'user_id'
    ];
    public function profileImage(){
        $imagePath=($this->image) ?  $this->image : '/profile/0VIz7gS1rt6o1PCukIYnLcnoCKi7Swia1kkzZrI5.png';
        return '/storage/' . $imagePath;
    }

    public function user(){
        return $this->belongsTo(User::class);
    }
}
