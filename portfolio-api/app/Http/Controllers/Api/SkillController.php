<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

class SkillController extends Controller
{
    public function index()
    {
       
        $skills = DB::table('skills')->orderBy('category', 'asc')->get();
        
        return response()->json($skills);
    }
}