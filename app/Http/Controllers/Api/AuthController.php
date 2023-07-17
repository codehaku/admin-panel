<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\LoginRequest;    // this line of code was missing that resoved POST 500 (Internal Server Error)
use App\Http\Requests\SignupRequest;   // this line of code was missing that resoved POST 500 (Internal Server Error)

class AuthController extends Controller{
    
public function login(LoginRequest $request){

}

public function signup(SignupRequest $request){

}

public function logout(Request $request){
    
}


}
