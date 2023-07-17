<?php

use App\http\Controllers\Api\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Requests\SignupRequest; // Update the import statement

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

//Route::post('/signup', [AuthController::class, 'signup']);


Route::post('/signup', [AuthController::class, 'signup']);
    // ->name('api.signup')
    // ->middleware('api')
    // ->uses([AuthController::class, 'signup'])
    // ->where('signupRequest', SignupRequest::class); // Update the class name

Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout']);