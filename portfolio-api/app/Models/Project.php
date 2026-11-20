<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;

    // This is the magic line!
    protected $casts = [
        'tech' => 'array',
        'featured' => 'boolean',
    ];
}