<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Lcobucci\JWT\Parser;

class UserController extends Controller
{
public $successStatus = 200;
/**
     * login api
     *
     * @return \Illuminate\Http\Response
     */
/**
     * Register api
     *
     * @return \Illuminate\Http\Response
     */
    public function register(Request $request)
    {
        $validator= Validator::make($request->all(), [
            'username'=>'required',
            'name'=>'',
            'email'=>'required|email',
            'password'=>'required',
            'image'=>'',
            'currencies_id'=>'',
        ]);

        $input = $request->all();
        $input['password'] = bcrypt($input['password']);
        $user = User::create($input);
        $input['users_id']=$user->id;
        $success['token'] =  $user->createToken('MyApp')-> accessToken;
        $success['username'] =  $user->username;
        return response()->json(['success'=>$success,'user'=>$user] ,$this->successStatus );
    }

public function login(Request $request)
{
    $user= User::where('email', $request->email)->first();
    if ($user){
        if ($request->password===$user->password){
            $token=$user->createToken('Laravel Password Grant Client')->accessToken;
            $response=['token'=>$token];
            return response($response,200);
        }else{
            $response='Password mismatch';
            return response($response,422);
        }
    } else{
        $response='User does not exist';
        return response($response,422);
    }
}

public function logout(Request $request){
    $token=$request->user()->token()->revoke();
    $response= 'You have been successfully logged out';
    return response(['message'=>$response,
                      'status'=>200,
]);
}


public function user(Request $request)
{
    return response()->json($request->user());
}

}
