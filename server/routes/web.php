<?php

use App\Geo\District;
use App\Geo\Division;
use Illuminate\Support\Carbon;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Route;



/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/{any?}', function () {

    return view('vue');

})->where('any', '.*');

Route::get('/', function () {


    $disId  = Arr::random(District::select('id')->get()->pluck('id')->toArray());
    $division_id = District::find($disId)->division->id;

  return   $division_id;
});


