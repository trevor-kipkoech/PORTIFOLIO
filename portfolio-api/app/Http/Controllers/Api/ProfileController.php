<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ProfileController extends Controller
{
    public function show()
    {
        return response()->json([
            'name' => 'Trevor Kipkoech',
            'role' => 'Software Engineer',
            'bio' => 'I build reliable web and mobile applications...',
            'location' => 'Kenya',
            'email' => 'trevor@example.com',
            'socials' => [
                'github' => 'https://github.com/yourusername',
                'linkedin' => 'https://linkedin.com/in/yourusername',
                'twitter' => 'https://twitter.com/yourusername',
            ]
        ]);
    }
}