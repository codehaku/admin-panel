<?php

use App\http\Controllers\Api\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Requests\SignupRequest; // Update the import statement
use App\Http\Controllers\Api\UserController; // suggested by chatgpt


Route::middleware('auth:sanctum') -> group(function(){
    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    Route::post('/logout', [AuthController::class, 'logout']);
    Route::apiResource('/users', UserController::class);

});
    

//Route::post('/signup', [AuthController::class, 'signup']);


Route::post('/signup', [AuthController::class, 'signup']);
    // ->name('api.signup')
    // ->middleware('api')
    // ->uses([AuthController::class, 'signup'])
    // ->where('signupRequest', SignupRequest::class); // Update the class name

Route::post('/login', [AuthController::class, 'login']);
