<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGeoLocationsTable extends Migration
{

    public static function create(Blueprint $table,$relation){

            $table->id();
            if($relation){
                $table->unsignedInteger($relation);
            }
            $table->string('name');
            $table->string('bn_name');
            $table->float('lat')->nullable();
            $table->float('lon')->nullable();
            $table->string('url')->nullable();

    }

    public static function tables(){
        return [
            ['name'=>'divisions','relation'=>false],
            ['name'=>'districts','relation'=>'division_id'],



        ];
    }
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {

       foreach(self::tables() as $item){
        Schema::create($item['name'], function (Blueprint $table) use ($item)
          {  self::create($table,$item['relation']);
        });
       }



    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        // foreach(self::tables() as $item){
        //     Schema::dropIfExists($item['name']);
        //    }

    }
}
