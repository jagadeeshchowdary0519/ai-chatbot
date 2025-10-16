// VIET AI Chatbot Configuration Example
// Copy this file to config.js and customize as needed

module.exports = {
  // SerpAPI Configuration
  // Get your free API key from: https://serpapi.com/
  SERPAPI_KEY: "your_serpapi_key_here",
  
  // Server Configuration
  PORT: process.env.PORT || 5000,
  NODE_ENV: process.env.NODE_ENV || "development",
  
  // VIET College Information
  COLLEGE_INFO: {
    name: "VIET College",
    website: "https://viet.edu.in",
    location: "Andhra Pradesh, India"
  },
  
  // Custom Responses for Common Queries
  CUSTOM_RESPONSES: {
    "admission": "Admissions at VIET are through AP EAMCET/ECET. Visit viet.ac.in for details.",
    "placement": "Our Placement Cell works with companies like TCS, Infosys, Wipro.",
    "courses": "VIET offers various engineering courses including CSE, ECE, EEE, and Mechanical.",
    "facilities": "VIET provides modern labs, library, sports facilities, and hostel accommodation.",
    "contact": "Contact VIET at +91-XXXXXXXXXX or email info@viet.edu.in"
  },
  
  // API Rate Limiting
  RATE_LIMIT: {
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
  }
};
