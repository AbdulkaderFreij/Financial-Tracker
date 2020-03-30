<?php

namespace App\Http\Controllers;
use Intervention\Image\Facades\Image;
use Illuminate\Http\Request;
use App\User;
use Illuminate\Support\Facades\Cache;


class ProfileController extends Controller
{
    //
    public function index(User $user)
    {
        $data= request()->validate([
            'image'=>['required', 'image'],
            'first_name'=>['required'],
            'last_name'=>['required'],

        ]);
        return view('profiles.index', compact('firstName', 'lastName', 'phoneNumber', 'image'));
    }

    public function edit(User $user)
    {
        $this->authorize('update', $user->profile);

        return view('profiles.edit', compact('user'));
    }

    public function update(User $user)
    {
        $data= request()->validate([
            'first_name'=> 'required',
            'last_name'=> 'required',
            'phone_number'=> '',
            'image'=>'image',
        ]);


        if (request('image')){

            $imagePath=request('image')->store('profile', 'public');

            $image = Image::make(public_path("storage/{$imagePath}"))->fit(1000, 1000);
            $image->save();
            $imageArray= ['image'=> $imagePath];
        }
        auth()->user()->profile->update(array_merge(
            $data,
            $imageArray ?? [],
        ));

        return redirect("/profile/{$user->id}");
    }
}
