"use client";

import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    medInc: "",
    houseAge: "",
    aveRooms: "",
    aveBedrms: "",
    population: "",
    aveOccup: "",
    latitude: "",
    longitude: ""
  });

  const [prediction, setPrediction] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setPrediction(null);

    try {
      const response = await fetch("/api/predict", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setPrediction(data.prediction);
      } else {
        setError(data.error || "Failed to get prediction");
      }
    } catch (err) {
      setError("An unexpected error occurred. Make sure the server is running.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="main-wrapper">
      <main className="container">
        <header>
          <h1>EstateAI</h1>
          <p>Precision House Price Prediction powered by Machine Learning</p>
        </header>

        <form onSubmit={handleSubmit} className="form-grid">
          <div className="input-container">
            <label htmlFor="medInc">Median Income</label>
            <input 
              type="number" 
              step="any" 
              name="medInc" 
              id="medInc" 
              required 
              placeholder="e.g. 3.5"
              value={formData.medInc}
              onChange={handleChange}
            />
          </div>
          <div className="input-container">
            <label htmlFor="houseAge">House Age</label>
            <input 
              type="number" 
              step="any" 
              name="houseAge" 
              id="houseAge" 
              required 
              placeholder="Years"
              value={formData.houseAge}
              onChange={handleChange}
            />
          </div>
          <div className="input-container">
            <label htmlFor="aveRooms">Average Rooms</label>
            <input 
              type="number" 
              step="any" 
              name="aveRooms" 
              id="aveRooms" 
              required 
              placeholder="Count"
              value={formData.aveRooms}
              onChange={handleChange}
            />
          </div>
          <div className="input-container">
            <label htmlFor="aveBedrms">Average Bedrooms</label>
            <input 
              type="number" 
              step="any" 
              name="aveBedrms" 
              id="aveBedrms" 
              required 
              placeholder="Count"
              value={formData.aveBedrms}
              onChange={handleChange}
            />
          </div>
          <div className="input-container">
            <label htmlFor="population">Population</label>
            <input 
              type="number" 
              step="any" 
              name="population" 
              id="population" 
              required 
              placeholder="District Pop."
              value={formData.population}
              onChange={handleChange}
            />
          </div>
          <div className="input-container">
            <label htmlFor="aveOccup">Average Occupancy</label>
            <input 
              type="number" 
              step="any" 
              name="aveOccup" 
              id="aveOccup" 
              required 
              placeholder="Hold size"
              value={formData.aveOccup}
              onChange={handleChange}
            />
          </div>
          <div className="input-container">
            <label htmlFor="latitude">Latitude</label>
            <input 
              type="number" 
              step="any" 
              name="latitude" 
              id="latitude" 
              required 
              placeholder="e.g. 34.05"
              value={formData.latitude}
              onChange={handleChange}
            />
          </div>
          <div className="input-container">
            <label htmlFor="longitude">Longitude</label>
            <input 
              type="number" 
              step="any" 
              name="longitude" 
              id="longitude" 
              required 
              placeholder="e.g. -118.24"
              value={formData.longitude}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? "Calculating Market Value..." : "Estimate Property Price"}
          </button>
        </form>

        {prediction !== null && (
          <div className="result-card">
            <h3>Estimated Market Value</h3>
            <div className="price-display">
              ${prediction.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </div>
          </div>
        )}

        {error && (
          <div className="error-box">
            <span>⚠️</span> {error}
          </div>
        )}
      </main>

      <footer>
        <p>Developed for IUST Internship &bull; Powered by Linear Regression</p>
      </footer>
    </div>
  );
}
