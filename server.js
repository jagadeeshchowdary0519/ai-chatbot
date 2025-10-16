const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const SERPAPI_KEY = process.env.SERPAPI_KEY;

app.post("/chat", async (req, res) => {
  const userMessage = req.body.message;
  let reply = "";

  if (userMessage.toLowerCase().includes("admission")) {
    reply = "Admissions at VIET are through AP EAMCET/ECET. Visit viet.ac.in for details.";
  } else if (userMessage.toLowerCase().includes("placements")) {
    reply = "Our Placement Cell works with companies like TCS, Infosys, Wipro.";
  } else {
    try {
      const url = `https://serpapi.com/search.json?q=${encodeURIComponent(userMessage)}&api_key=${SERPAPI_KEY}`;
      const response = await fetch(url);
      const data = await response.json();

      console.log("🔍 Full API Response:", JSON.stringify(data, null, 2));

      if (data.answer_box && data.answer_box.answer) {
        reply = data.answer_box.answer;
      } else if (data.organic_results && data.organic_results.length > 0) {
        reply = data.organic_results[0].snippet;
      } else if (data.error) {
        reply = "⚠️ SerpAPI Error: " + data.error;
      } else {
        const wikiUrl = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(userMessage)}`;
        const wikiRes = await fetch(wikiUrl);
        const wikiData = await wikiRes.json();
        if (wikiData.extract) {
          reply = wikiData.extract;
        } else {
          reply = "I couldn't find an answer. Please try again!";
        }
      }
    } catch (err) {
      console.error("❌ Fetch failed:", err);
      reply = "⚠️ Error fetching from Google Search.";
    }
  }

  res.json({ reply });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Backend running on port ${PORT}`));
