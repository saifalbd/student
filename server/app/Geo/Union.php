<?php

namespace App\Geo;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\App;

class Union extends Model
{
    public function upazila(){
        return $this->belongsTo(Upazila::class,'upazilla_id','id');
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
