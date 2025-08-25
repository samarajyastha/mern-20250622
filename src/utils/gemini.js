import axios from "axios";
import config from "../config/config.js";

const promptGemini = async (promptMessage) => {
  const response = await axios.post(
    config.gemini.url,
    {
      contents: [
        {
          parts: [
            {
              text: promptMessage,
            },
          ],
        },
      ],
    },
    {
      headers: {
        "x-goog-api-key": config.gemini.apiKey,
      },
    }
  );

  return response.data.candidates[0].content.parts[0].text;
};

export default promptGemini;
