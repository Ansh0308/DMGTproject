ṇfrom flask import Flask, request, jsonify
from flask_cors import CORS
import requests
from datetime import datetime

app = Flask(__name__)
CORS(app)

RAPID_API_KEY = "d5e98ec0e4msh39d65207d97629fp1d97a7jsn3161280864cb"
RAPID_API_HOST = "irctc1.p.rapidapi.com"

@app.route('/api/search-routes', methods=['POST'])
def search_routes():
    try:
        data = request.json
        date_obj = datetime.strptime(data['date'], '%Y-%m-%d')
        formatted_date = date_obj.strftime('%Y%m%d')

        url = "https://irctc1.p.rapidapi.com/api/v3/trainBetweenStations"
        
        querystring = {
            "fromStationCode": data['from'],
            "toStationCode": data['to'],
            "dateOfJourney": formatted_date
        }
        
        headers = {
            "x-rapidapi-key": RAPID_API_KEY,
            "x-rapidapi-host": RAPID_API_HOST
        }
        
        response = requests.get(url, headers=headers, params=querystring)
        api_data = response.json()
        
        if 'data' not in api_data:
            return jsonify({"error": "No trains found"}), 404
            
        routes = []
        for train in api_data['data']:
            route = {
                "segments": [{
                    "trainNumber": train['train_number'],
                    "trainName": train['train_name'],
                    "departureStation": {
                        "code": data['from'],
                        "name": train['from_station_name']
                    },
                    "arrivalStation": {
                        "code": data['to'],
                        "name": train['to_station_name']
                    },
                    "departureTime": train['departure_time'],
                    "arrivalTime": train['arrival_time'],
                    "duration": train['duration'],
                    "platform": train.get('departure_platform', 'TBA')
                }],
                "totalDuration": train['duration'],
                "totalFare": float(train.get('price', {}).get('1A', 0)),
                "changes": 0
            }
            routes.append(route)
            
        return jsonify(routes)
        
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(port=5000)