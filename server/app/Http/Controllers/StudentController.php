<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateStudent;
use App\Student;
use Illuminate\Http\Request;
use App\Geo\District;
use Illuminate\Support\Arr;

class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Student::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CreateStudent $request)
    {
        // $disId  = Arr::random(District::select('id')->get()->pluck('id')->toArray());
        // $division_id = District::find($disId)->division->id;
        // $request->merge([
        //     'division_id'=>$division_id,
        //     'district_id'=> $disId
        //    ]);
       $data =  $request->only(["name", "class_name", "section", "birth_date", "fee", "phone",'address','division_id','district_id']);

     $student =  Student::create($data );
       return response($student);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Student $student)
    {
       return $student;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit( Student $student)
    {

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(CreateStudent $request, Student $student)
    {
        $data =  $request->only(["name", "class_name", "section", "birth_date", "fee", "phone",'address','division_id','district_id']);

        $student =  $student->update( $data);
          return response($student);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Student $student)
    {
         $student->delete();
         return response('removed' );
    }
}
