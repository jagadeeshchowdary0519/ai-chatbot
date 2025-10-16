# 🤖 VIET AI Chatbot

A modern, responsive AI chatbot for VIET College that provides information about admissions, placements, courses, facilities, and more. The chatbot integrates with SerpAPI for real-time search results and Wikipedia for additional information.

## ✨ Features

- **Modern UI/UX**: Beautiful, responsive chat interface with VIET College branding
- **Quick Actions**: Pre-defined buttons for common queries
- **Real-time Search**: Integration with SerpAPI for up-to-date information
- **Fallback Support**: Wikipedia API integration when search results are limited
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Typing Indicators**: Visual feedback during bot responses
- **Message History**: Expandable messages for long responses

## 🚀 Quick Start

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager
- SerpAPI key (already configured in the code)

### Installation

1. **Clone or download the project**
   ```bash
   cd viet-ai-chatbot
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the backend server**
   ```bash
   npm start
   ```
   
   Or for development with auto-restart:
   ```bash
   npm run dev
   ```

4. **Open the frontend**
   - Open `index.html` in your web browser
   - Or serve it using a local server

## 🏗️ Project Structure

```
viet-ai-chatbot/
├── index.html          # Frontend HTML/CSS/JavaScript
├── server.js           # Backend Node.js server
├── package.json        # Node.js dependencies
└── README.md           # This file
```

## 🔧 Configuration

### SerpAPI Key
The chatbot uses a pre-configured SerpAPI key for search functionality. If you need to use your own key:

1. Sign up at [SerpAPI](https://serpapi.com/)
2. Get your API key
3. Replace the `SERPAPI_KEY` value in `server.js`

### Custom Responses
You can customize the hardcoded responses for specific keywords in `server.js`:

```javascript
if (userMessage.toLowerCase().includes("admission")) {
  reply = "Your custom admission message here";
}
```

## 🌐 API Endpoints

- **POST** `/chat` - Main chat endpoint
  - Request body: `{ "message": "user question" }`
  - Response: `{ "reply": "bot response" }`

## 🎨 Customization

### Styling
The chatbot uses CSS custom properties and modern design principles. You can customize:

- Colors: Modify the CSS variables in the `<style>` section
- Background: Change the background image URL
- Layout: Adjust dimensions and spacing
- Typography: Modify font families and sizes

### Functionality
- Add new quick action buttons
- Implement additional API integrations
- Add user authentication
- Include chat history persistence

## 🚀 Deployment

### Local Development
- Backend runs on `http://localhost:5000`
- Frontend can be opened directly from `index.html`

### Production Deployment
1. **Backend**: Deploy `server.js` to a Node.js hosting service (Heroku, Vercel, etc.)
2. **Frontend**: Update the API endpoint in `index.html` to point to your deployed backend
3. **Environment Variables**: Set `SERPAPI_KEY` as an environment variable

## 🔍 How It Works

1. **User Input**: User types a question or clicks a quick action button
2. **Backend Processing**: Server processes the message using:
   - Hardcoded responses for common queries
   - SerpAPI for real-time search results
   - Wikipedia API as a fallback
3. **Response Generation**: Bot generates and returns an appropriate response
4. **Frontend Display**: Response is displayed in the chat interface

## 🛠️ Technologies Used

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Backend**: Node.js, Express.js
- **APIs**: SerpAPI, Wikipedia API
- **Styling**: Modern CSS with Flexbox and CSS Grid

## 📱 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For technical support or questions:
- Check the console for error messages
- Verify your internet connection
- Ensure the backend server is running
- Check that all dependencies are installed

## 🔮 Future Enhancements

- [ ] User authentication and chat history
- [ ] Multi-language support
- [ ] Voice input/output
- [ ] File upload capabilities
- [ ] Advanced AI model integration
- [ ] Analytics and reporting
- [ ] Admin dashboard

---

**Made with ❤️ for VIET College**
