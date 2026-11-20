<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ExperienceSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('experiences')->insert([
            [
                'year' => '2022 — Present',
                'role' => 'Senior Software Engineer',
                'company' => 'TechCorp Ltd',
                'description' => 'Lead a team building a Laravel + React SaaS platform serving 10k+ users. Architect mobile app in Flutter and mentor junior devs.',
                'created_at' => now(),
            ],
            [
                'year' => '2020 — 2022',
                'role' => 'Full Stack Developer',
                'company' => 'StartupHub',
                'description' => 'Built REST APIs with Laravel, designed React dashboards, and shipped mobile features in Flutter. Reduced page load time by 40%.',
                'created_at' => now(),
            ],
            [
                'year' => '2019 — 2020',
                'role' => 'Junior Developer',
                'company' => 'WebStudio',
                'description' => 'Developed responsive websites with React & Tailwind. Contributed to legacy PHP maintenance and migration to Laravel.',
                'created_at' => now(),
            ],
        ]);
    }
}