<?php

use Illuminate\Database\Seeder;

class DivisionSeederAdd extends Seeder
{
    public function makeDivisions(){
        $path =  database_path('bgeo/divisions/divisions.php');
        $arr = collect(include($path))->forget('id')->toArray();
        \Illuminate\Support\Facades\DB::table('divisions')->insert($arr);

    }
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->makeDivisions();
    }
}
