<?php

namespace App\Geo;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\App;

class Upazila extends Model
{
     protected $table = 'upazillas';


    public function district(){
        return $this->belongsTo(District::class,'district_id');
    }
    public function unions(){
        return $this->hasMany(Union::class,'upazilla_id','id');
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
