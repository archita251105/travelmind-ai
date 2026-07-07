import json
import os
from dotenv import load_dotenv
from google import genai

load_dotenv()

client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))


def generate_trip_plan(destination, days, budget, style):
    prompt = f"""
You are a professional AI Travel Planner.

Return ONLY valid JSON.
Do not write markdown.
Do not use ```json.
Do not add explanation.

Return exactly this structure:

{{
  "overview": {{
    "destination": "{destination}",
    "duration": "{days} Days",
    "budget": "{budget}",
    "style": "{style}"
  }},
  "days": [
    {{
      "day": 1,
      "morning": "Detailed morning plan",
      "afternoon": "Detailed afternoon plan",
      "evening": "Detailed evening plan",
      "estimatedCost": "Estimated cost for this day"
    }}
  ],
  "hotels": [
    "Hotel suggestion 1",
    "Hotel suggestion 2",
    "Hotel suggestion 3"
  ],
  "restaurants": [
    "Restaurant or food suggestion 1",
    "Restaurant or food suggestion 2",
    "Restaurant or food suggestion 3"
  ],
  "packing": [
    "Packing item 1",
    "Packing item 2",
    "Packing item 3"
  ],
  "tips": [
    "Safety or travel tip 1",
    "Safety or travel tip 2",
    "Safety or travel tip 3"
  ],
  "hiddenGems": [
    "Hidden gem 1",
    "Hidden gem 2"
  ]
}}

Generate a practical and detailed itinerary for:
Destination: {destination}
Days: {days}
Budget: {budget}
Travel Style: {style}

Important:
- Generate exactly {days} day objects inside "days".
- Keep all values as strings.
- Return JSON only.
"""

    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=prompt,
    )

    clean_text = response.text.strip()

    if clean_text.startswith("```json"):
        clean_text = clean_text.replace("```json", "").replace("```", "").strip()

    if clean_text.startswith("```"):
        clean_text = clean_text.replace("```", "").strip()

    return json.loads(clean_text)