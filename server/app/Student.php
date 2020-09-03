<?php

namespace App;

use App\Traits\TimeOffset;
use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    use TimeOffset;
    protected $casts = [
        'address' => 'array',

     ];


     /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        "name", "class_name", "section", "birth_date", "fee", "phone", "address",
        'division_id','district_id'
    ];


}
