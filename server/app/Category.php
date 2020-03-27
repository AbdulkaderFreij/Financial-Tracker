<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Category extends Model
{
    use Notifiable;
    protected $fillable = [
        'name',
    ];
    protected $guarded=[];
    public function user(){
        return $this->belongsTo(User::class);
    }
}
