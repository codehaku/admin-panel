<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class LoginRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
<<<<<<< HEAD
        return true;
=======
        return true;               // make sure to change the authorise from 'false' to 'true'
>>>>>>> c273694beebb2faa1631a3ee23b3881fb8df7e22
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
<<<<<<< HEAD
        
            return [
                'email' => 'required|email|exists:users,email',
                'password' => 'required'
            ];
=======
        return [
            
            'email' => 'required|email|unique|exists:users,email',
            'password' => 'required'
        ];
>>>>>>> c273694beebb2faa1631a3ee23b3881fb8df7e22
    }
}


