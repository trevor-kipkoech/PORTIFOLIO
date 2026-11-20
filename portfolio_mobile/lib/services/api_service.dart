import 'dart:convert';
import 'package:http/http.dart' as http;

class ApiService {
  // Use 10.0.2.2 for Android Emulator. Use 127.0.0.1 for iOS Simulator.
  static const String baseUrl = 'http://10.0.2.2:8000/api';

  static Future<List<dynamic>> getProjects() async {
    final response = await http.get(Uri.parse('$baseUrl/projects'));
    if (response.statusCode == 200) {
      return json.decode(response.body);
    } else {
      throw Exception('Failed to load projects');
    }
  }

  static Future<bool> sendMessage(String name, String email, String message) async {
    final response = await http.post(
      Uri.parse('$baseUrl/contact'),
      headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
      body: json.encode({'name': name, 'email': email, 'message': message}),
    );
    return response.statusCode == 201;
  }
}