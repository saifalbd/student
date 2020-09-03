<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CreateStudent extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            "name"=>['required','string','max:100'],
            "class_name"=>['required','numeric'],
             "section"=>['required','in:A,B,C'],
              "birth_date"=>['required','date'],
              "fee"=>['required','numeric'],
               "phone"=>['required','string'],
               "address"=>['required','array'],
               "address.*"=>['required','string'],
               'division_id'=>['required','numeric'],
               'district_id'=>['required','numeric'],
        ];
    }
}
