<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Student;
use Faker\Generator as Faker;
use App\Geo\District;
use App\Geo\Division;
use Illuminate\Support\Carbon;
use Illuminate\Support\Arr;

$factory->define(Student::class, function (Faker $faker) {

    $disId  = Arr::random(District::select('id')->get()->pluck('id')->toArray());
    $division_id = District::find($disId)->division->id;

    return [
        "name"=>$faker->name,
        "class_name"=>\rand(1,10),
         "section"=>Arr::random(['A','B','C']),
          "birth_date"=>Carbon::now()->subYears(\rand(2000,2010)),
          "fee"=>\rand(1000,2000),
           "phone"=>$faker->phoneNumber,
           "address"=>json_encode(['al gram','som Bazar','dummy city']),
           'division_id'=>$division_id,
           'district_id'=> $disId

    ];
});
