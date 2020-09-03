<?php

namespace App\Geo;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\App;

class Division extends Model
{
  //  protected $with = ['districts'];

    public function districts(){
        return $this->hasMany(District::class);

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
