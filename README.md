# EstateAI - House Price Prediction

EstateAI is a modern web application for predicting house prices in California using a Linear Regression model. This project demonstrates a complete machine learning lifecycle—from data exploration and model training to building a high-performance web interface.

![EstateAI Preview](https://via.placeholder.com/800x450/050505/3b82f6?text=EstateAI+House+Price+Prediction)

## 🚀 Live Demo
You can deploy this project to Vercel in seconds!

## ✨ Features
- **Accurate Predictions**: Leverages a Linear Regression model trained on the California Housing dataset.
- **Premium UI**: Modern dark mode interface with glassmorphism aesthetics.
- **Real-time API**: Backend powered by Python (Flask) running as Vercel Serverless Functions.
- **Responsive Design**: Works perfectly on desktops, tablets, and mobile devices.

## 🛠️ Tech Stack
- **Frontend**: Next.js (TypeScript), React, Vanilla CSS.
- **Backend**: Python (Flask).
- **Machine Learning**: Scikit-Learn, NumPy, Pandas.
- **Deployment**: Vercel.

## 📂 Project Structure
```text
house-price-ui/
├── api/                # Python Serverless Backend
│   ├── index.py        # Flask API handler
│   └── model.pkl       # Trained ML Model
├── app/                # Next.js Frontend (App Router)
├── public/             # Static Assets
├── vercel.json         # Vercel Configuration
└── requirements.txt    # Python Dependencies
```

## ⚙️ How to Run Locally

### 1. Prerequisites
- Node.js (v18+)
- Python (v3.9+)

### 2. Setup and Run
1. **Clone the repository**:
   ```bash
   git clone https://github.com/AbdulWaihd/ML_Training.git
   cd house-price-ui
   ```

2. **Install Frontend Dependencies**:
   ```bash
   npm install
   ```

3. **Install Backend Dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

4. **Run Development Server**:
   It's recommended to use the [Vercel CLI](https://vercel.com/cli) to run the full stack:
   ```bash
   vercel dev
   ```
   Or run manually:
   - Start Backend: `python api/index.py` (Port 5000)
   - Start Frontend: `npm run dev` (Port 3000)

## 🚢 Deployment (Vercel)
1. Push this folder to your GitHub repository.
2. Link the repository to your [Vercel Dashboard](https://vercel.com).
3. Vercel will auto-detect the configuration and deploy your app.

## 🎓 About the Machine Learning Model
The model is a **Linear Regression** algorithm achieving an **R² score of ~0.58** on the California Housing dataset. It considers features such as median income, house age, average rooms, and geographical location to provide a market-aware estimation.

---
Developed for the **IUST Internship Task 1**.
© 2026 EstateAI
