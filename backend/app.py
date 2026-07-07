from flask import Flask, request, jsonify
from flask_cors import CORS
from services.gemini_service import generate_trip_plan

app = Flask(__name__)
CORS(app)


@app.route("/", methods=["GET"])
def home():
    return jsonify({"message": "TravelMind AI backend is running"})


@app.route("/api/plan-trip", methods=["POST"])
def plan_trip():
    data = request.get_json()

    destination = data.get("destination")
    days = data.get("days")
    budget = data.get("budget")
    style = data.get("style")

    if not destination or not days or not budget or not style:
        return jsonify({"error": "All fields are required"}), 400

    trip_plan = generate_trip_plan(destination, days, budget, style)

    return jsonify({"tripPlan": trip_plan})


if __name__ == "__main__":
    app.run(debug=True, port=5000)