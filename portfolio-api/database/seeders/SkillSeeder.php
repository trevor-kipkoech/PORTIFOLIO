<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SkillSeeder extends Seeder
{
    public function run(): void
    {
        DB::table('skills')->insert([
            // Frontend
            ['name' => 'React', 'category' => 'Frontend', 'icon_name' => 'SiReact', 'color' => '#61DAFB'],
            ['name' => 'JavaScript', 'category' => 'Frontend', 'icon_name' => 'SiJavascript', 'color' => '#F7DF1E'],
            ['name' => 'Tailwind CSS', 'category' => 'Frontend', 'icon_name' => 'SiTailwindcss', 'color' => '#06B6D4'],
            
            // Backend
            ['name' => 'PHP', 'category' => 'Backend', 'icon_name' => 'SiPhp', 'color' => '#777BB4'],
            ['name' => 'Laravel', 'category' => 'Backend', 'icon_name' => 'SiLaravel', 'color' => '#FF2D20'],
            ['name' => 'MySQL', 'category' => 'Backend', 'icon_name' => 'SiMysql', 'color' => '#4479A1'],
            
            // Mobile & Tools
            ['name' => 'Flutter', 'category' => 'Mobile & Tools', 'icon_name' => 'SiFlutter', 'color' => '#02569B'],
            ['name' => 'Git', 'category' => 'Mobile & Tools', 'icon_name' => 'SiGit', 'color' => '#F05032'],
            ['name' => 'Docker', 'category' => 'Mobile & Tools', 'icon_name' => 'SiDocker', 'color' => '#2496ED'],
        ]);
    }
}