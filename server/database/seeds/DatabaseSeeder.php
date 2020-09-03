<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        factory(\App\Student::class, 50)->create();
        $this->call([
          DivisionSeederAdd::class,
            DistrictSeederAdd::class
        ]);
    }
}
