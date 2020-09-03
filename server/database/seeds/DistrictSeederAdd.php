<?php

use Illuminate\Database\Seeder;

class DistrictSeederAdd extends Seeder
{
    public function generate(){
        $path =  database_path('bgeo/districts/districts.php');
        $arr = collect(include($path))->forget('id')->toArray();
        \Illuminate\Support\Facades\DB::table('districts')->insert($arr);

    }
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->generate();
    }
}
