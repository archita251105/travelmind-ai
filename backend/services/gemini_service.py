import os
from dotenv import load_dotenv
from google import genai

load_dotenv()

client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))


def generate_trip_plan(destination, days, budget, style):
    prompt = f"""
You are an expert AI travel planner.

Create a detailed travel plan for:

Destination: {destination}
Days: {days}
Budget: {budget}
Travel Style: {style}

Return the answer in this clean format:

TRIP OVERVIEW
- Destination:
- Duration:
- Budget:
- Travel Style:

DAY WISE ITINERARY

Day 1
Morning:
Afternoon:
Evening:
Estimated Cost:

Day 2
Morning:
Afternoon:
Evening:
Estimated Cost:

HOTEL RECOMMENDATIONS
- Hotel 1:
- Hotel 2:
- Hotel 3:

FOOD RECOMMENDATIONS
- Dish 1:
- Dish 2:
- Restaurant 1:
- Restaurant 2:

BUDGET BREAKDOWN
- Stay:
- Food:
- Transport:
- Activities:
- Shopping:
- Emergency:

PACKING CHECKLIST
- Item 1
- Item 2
- Item 3

SAFETY TIPS
- Tip 1
- Tip 2
- Tip 3

HIDDEN GEMS
- Place 1
- Place 2

Keep it practical, detailed and beginner-friendly.
"""

    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=prompt,
    )

    return response.text