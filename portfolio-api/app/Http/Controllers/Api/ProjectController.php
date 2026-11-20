<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Project; 

class ProjectController extends Controller
{
    public function index()
    {
        // Using the model ensures the 'casts' are applied
        $projects = Project::orderBy('featured', 'desc')->get();
        return response()->json($projects);
    }
}