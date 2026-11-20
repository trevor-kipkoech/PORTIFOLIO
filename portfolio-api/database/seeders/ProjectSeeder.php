<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProjectSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('projects')->insert([
            [
                'title' => 'E-Commerce Platform',
                'description' => 'Full-stack marketplace with a Laravel API, React admin dashboard, and Flutter mobile app.',
                'tech' => json_encode(['Laravel', 'React', 'Flutter', 'MySQL']),
                'featured' => true,
                'created_at' => now(),
            ],
            [
                'title' => 'Task Management SaaS',
                'description' => 'Multi-tenant SaaS with teams, kanban boards, and real-time collaboration.',
                'tech' => json_encode(['Laravel', 'React', 'MySQL', 'WebSockets']),
                'featured' => false,
                'created_at' => now(),
            ],
        ]);
    }
}