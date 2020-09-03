<?php

namespace App\Traits;
use Carbon\Carbon;


trait TimeOffset
{

    public function getCreatedAtAttribute($value)
    {

        return (new Carbon($value))->diffForHumans();
    }
    public function getUpdatedAtAttribute($value)
    {
        return (new Carbon($value))->diffForHumans();
    }
}
