<?php

namespace App;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
class Transaction extends Model
{
    protected $fillable = ['start_date', 'end_date', 'amount', 'title', 'description', 'type', 'interval', 'currencies_id', 'categories_id', 'users_id'];

    public function setCategoryIdAttribute($input)
    {
        $this->attributes['categories_id'] = $input ? $input : null;
    }

    public function setStartDateAttribute($input)
    {
        if ($input != null && $input != '') {
            $this->attributes['start_date'] = Carbon::createFromFormat(config('app.date_format'), $input)->format('Y-m-d');
        } else {
            $this->attributes['start_date'] = null;
        }
    }

    public function getStartDateAttribute($input)
    {
        $zeroDate = str_replace(['Y', 'm', 'd'], ['0000', '00', '00'], config('app.date_format'));

        if ($input != $zeroDate && $input != null) {
            return Carbon::createFromFormat('Y-m-d', $input)->format(config('app.date_format'));
        } else {
            return '';
        }
    }

    public function setEndDateAttribute($input)
    {
        if ($input != null && $input != '') {
            $this->attributes['end_date'] = Carbon::createFromFormat(config('app.date_format'), $input)->format('Y-m-d');
        } else {
            $this->attributes['end_date'] = null;
        }
    }

    public function getEndDateAttribute($input)
    {
        $zeroDate = str_replace(['Y', 'm', 'd'], ['0000', '00', '00'], config('app.date_format'));

        if ($input != $zeroDate && $input != null) {
            return Carbon::createFromFormat('Y-m-d', $input)->format(config('app.date_format'));
        } else {
            return '';
        }
    }

    public function setUserIdAttribute($input)
    {
        $this->attributes['users_id'] = $input ? $input : null;
    }

    public function categories()
    {
        return $this->belongsTo(Category::class, 'categories_id');
    }

    public function users()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function currencies()
    {
        return $this->belongsTo(Currency::class, 'currencies_id');
    }
}

