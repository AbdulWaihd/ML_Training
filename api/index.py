from flask import Flask, request, jsonify
import pickle
import numpy as np
import os
import warnings

# Suppress sklearn warnings
warnings.filterwarnings("ignore", category=UserWarning)

app = Flask(__name__)

# Load the model
# Vercel serverless environment needs absolute path from file locations
current_dir = os.path.dirname(os.path.abspath(__file__))
model_path = os.path.join(current_dir, 'linear_regression_model.pkl')

try:
    with open(model_path, 'rb') as f:
        model = pickle.load(f)
except Exception as e:
    print(f"Error loading model: {e}")
    model = None

@app.route('/api/predict', methods=['POST'])
def predict():
    if model is None:
        return jsonify({'success': False, 'error': 'Model not loaded on server.'}), 500
        
    try:
        data = request.json
        # Expected features order: [MedInc, HouseAge, AveRooms, AveBedrms, Population, AveOccup, Latitude, Longitude]
        features = [
            float(data.get('medInc', 0)),
            float(data.get('houseAge', 0)),
            float(data.get('aveRooms', 0)),
            float(data.get('aveBedrms', 0)),
            float(data.get('population', 0)),
            float(data.get('aveOccup', 0)),
            float(data.get('latitude', 0)),
            float(data.get('longitude', 0))
        ]
        
        input_data = np.array([features])
        prediction = model.predict(input_data)
        
        # Price is in units of $100,000
        price_usd = float(prediction[0] * 100000)
        
        return jsonify({
            'success': True,
            'prediction': price_usd
        })
    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e)
        }), 400

@app.route('/api/health', methods=['GET'])
def health():
    return jsonify({'status': 'ok', 'model_loaded': model is not None})

if __name__ == '__main__':
    app.run()
