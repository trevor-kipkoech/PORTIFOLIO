import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:google_fonts/google_fonts.dart';
import '../services/api_service.dart';
import 'contact_screen.dart';

class HomeScreen extends StatefulWidget {
  const HomeScreen({super.key});

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  List<dynamic> _projects = [];
  bool _isLoading = true;

  @override
  void initState() {
    super.initState();
    _loadProjects();
  }

  Future<void> _loadProjects() async {
    try {
      final projects = await ApiService.getProjects();
      setState(() {
        _projects = projects;
        _isLoading = false;
      });
    } catch (e) {
      setState(() => _isLoading = false);
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.white,
        elevation: 0,
        title: Text(
          'Kóech',
          style: GoogleFonts.playfairDisplay(
            color: const Color(0xFFBE123C),
            fontWeight: FontWeight.bold,
            fontSize: 24,
          ),
        ),
      ),
      body: SingleChildScrollView(
        padding: const EdgeInsets.all(24.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            // Hero Section
            Text('Hello, I am', style: GoogleFonts.lora(fontStyle: FontStyle.italic, color: const Color(0xFFBE123C))),
            const SizedBox(height: 8),
            Text('Trevor Kipkoech', style: Theme.of(context).textTheme.displayLarge),
            const SizedBox(height: 8),
            Text(
              'Software Engineer | PHP · React · Mobile',
              style: Theme.of(context).textTheme.titleLarge?.copyWith(fontSize: 16, color: const Color(0xFF4B5563)),
            ),
            const SizedBox(height: 16),
            Text(
              'I build reliable web and mobile applications with a focus on the PHP and JavaScript ecosystems.',
              style: Theme.of(context).textTheme.bodyLarge,
            ),
            const SizedBox(height: 24),
            
            // Action Buttons
            Row(
              children: [
                ElevatedButton(
                  style: ElevatedButton.styleFrom(
                    backgroundColor: const Color(0xFFBE123C),
                    foregroundColor: Colors.white,
                    padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 14),
                    shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
                  ),
                  onPressed: () {},
                  child: const Text('View Projects'),
                ),
                const SizedBox(width: 12),
                OutlinedButton(
                  style: OutlinedButton.styleFrom(
                    foregroundColor: const Color(0xFFBE123C),
                    side: const BorderSide(color: Color(0xFFBE123C), width: 2),
                    padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 14),
                    shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
                  ),
                  onPressed: () {},
                  child: const Text('Resume'),
                ),
              ],
            ),
            const SizedBox(height: 32),
            
            // Socials
            Row(
              children: [
                _buildSocialIcon(FontAwesomeIcons.github),
                const SizedBox(width: 24),
                _buildSocialIcon(FontAwesomeIcons.linkedin),
                const SizedBox(width: 24),
                _buildSocialIcon(FontAwesomeIcons.twitter),
              ],
            ),
            const SizedBox(height: 48),

            // Projects Section
            Text('Selected Work', style: GoogleFonts.lora(fontStyle: FontStyle.italic, color: const Color(0xFFBE123C))),
            const SizedBox(height: 8),
            Text('Featured Projects', style: Theme.of(context).textTheme.titleLarge),
            const SizedBox(height: 24),

            _isLoading 
                ? const Center(child: CircularProgressIndicator(color: Color(0xFFBE123C)))
                : ListView.builder(
                    shrinkWrap: true,
                    physics: const NeverScrollableScrollPhysics(),
                    itemCount: _projects.length,
                    itemBuilder: (context, index) {
                      final project = _projects[index];
                      
                      // Safely parse the tech stack whether it's a String or a List
                      List techList = [];
                      if (project['tech'] is List) {
                        techList = project['tech'];
                      } else if (project['tech'] is String) {
                        techList = project['tech'].split(','); // Basic fallback
                      }

                      return Container(
                        margin: const EdgeInsets.only(bottom: 20),
                        padding: const EdgeInsets.all(20),
                        decoration: BoxDecoration(
                          color: const Color(0xFFFFFAFB),
                          border: Border.all(color: const Color(0xFFFECDD3)),
                          borderRadius: BorderRadius.circular(16),
                        ),
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text(project['title'] ?? 'No Title', style: Theme.of(context).textTheme.titleLarge?.copyWith(fontSize: 20)),
                            const SizedBox(height: 8),
                            Text(project['description'] ?? 'No Description', style: Theme.of(context).textTheme.bodyMedium),
                            const SizedBox(height: 16),
                            Wrap(
                              spacing: 8,
                              runSpacing: 8,
                              children: techList.map((t) => Container(
                                padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
                                decoration: BoxDecoration(
                                  color: const Color(0xFFFFE4E6),
                                  borderRadius: BorderRadius.circular(20),
                                ),
                                child: Text(t.toString(), style: GoogleFonts.lora(fontSize: 12, color: const Color(0xFFBE123C), fontWeight: FontWeight.bold)),
                              )).toList(),
                            ),
                          ],
                        ),
                      );
                    },
                  ),

            const SizedBox(height: 32),

            // Contact Button
            SizedBox(
              width: double.infinity,
              child: ElevatedButton(
                style: ElevatedButton.styleFrom(
                  backgroundColor: const Color(0xFF1F2937),
                  foregroundColor: Colors.white,
                  padding: const EdgeInsets.symmetric(vertical: 16),
                  shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(8)),
                ),
                onPressed: () {
                  Navigator.push(context, MaterialPageRoute(builder: (_) => const ContactScreen()));
                },
                child: Text('Get In Touch', style: GoogleFonts.lora(fontWeight: FontWeight.bold)),
              ),
            ),
          ],
        ),
      ),
    );
  }

  Widget _buildSocialIcon(FaIconData icon) {
    return InkWell(
      onTap: () {},
      child: FaIcon(icon, size: 28, color: const Color(0xFF9CA3AF)),
    );
  }
}