<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

class ExperienceController extends Controller
{
    public function index()
    {
        // Fetch all experiences. 
        // We order by 'id' descending assuming the latest job was added last.
        // If you want them ordered by year, we can adjust this later.
        $experiences = DB::table('experiences')->orderBy('id', 'desc')->get();
        
        return response()->json($experiences);
    }
}