import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'screens/home_screen.dart';

void main() {
  runApp(const PortfolioApp());
}

class PortfolioApp extends StatelessWidget {
  const PortfolioApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Trevor Kipkoech',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        scaffoldBackgroundColor: Colors.white,
        primaryColor: const Color(0xFFBE123C), // Maroon
        colorScheme: ColorScheme.fromSeed(
          seedColor: const Color(0xFFBE123C),
          primary: const Color(0xFFBE123C),
        ),
        // Classic Typography
        textTheme: TextTheme(
          displayLarge: GoogleFonts.playfairDisplay(
            fontSize: 36, fontWeight: FontWeight.w800, color: const Color(0xFF1F2937),
          ),
          titleLarge: GoogleFonts.playfairDisplay(
            fontSize: 24, fontWeight: FontWeight.bold, color: const Color(0xFF1F2937),
          ),
          bodyLarge: GoogleFonts.lora(
            fontSize: 16, color: const Color(0xFF4B5563), height: 1.6,
          ),
          bodyMedium: GoogleFonts.lora(
            fontSize: 14, color: const Color(0xFF4B5563),
          ),
        ),
        useMaterial3: true,
      ),
      home: const HomeScreen(),
    );
  }
}