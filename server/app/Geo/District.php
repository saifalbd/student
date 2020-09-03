<?php

namespace App\Geo;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\App;

class District extends Model
{
    // protected $with = ['upazilas'];
    public function division(){
        return $this->belongsTo(Division::class);
    }
    public function upazilas(){
        return $this->hasMany(Upazila::class);
    }
    public function getDefaultNameAttribute($value)
    {
        if (App::isLocale('bn')) {
            return $this->bn_name;
        }else {
            return $value;
        }

    }
}
