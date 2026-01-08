# 🎵 Melodies API (Backend)

The server-side application for the **Melodies** music platform. This service acts as a robust middleware between the Deezer API and the frontend, providing custom data processing, optimized search logic, and user collection management.

## 🛠 Tech Stack

* **Node.js** — JavaScript runtime environment.
* **Express.js** — Fast and minimalist web framework for routing.
* **Axios** — For making asynchronous requests to the Deezer API.
* **CORS** — Configured for secure cross-origin resource sharing with the frontend.

## 📋 API Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/search` | **Hybrid Search**: Returns a list of tracks and the most relevant "Best Match" artist. |
| `GET` | `/api/genres` | Fetches a complete list of available music genres. |
| `GET` | `/api/charts/albums` | Provides top-rated albums for the Discovery and Home sections. |
| `GET` | `/api/auth/favorites` | Retrieves the current user's collection of liked tracks. |
| `POST` | `/api/auth/favorites` | Toggles (adds/removes) a track in the user's favorite list. |

## 🏗 Project Architecture

The project follows a modular structure for better maintainability and scalability:

* **/api**: Centralized Axios configurations and direct external API calls.
* **/controllers**: Core business logic, including the search algorithm that identifies the "Best Match" artist from track results.
* **/routes**: Definition of API endpoints and mapping to specific controllers.
* **index.js**: Application entry point, server configuration, and middleware setup.

## 🚀 Getting Started

### Prerequisites
* Node.js (v14 or higher)
* npm or yarn

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <your-backend-repo-url>
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the application (Development mode):**
    ```bash
    npm run dev
    ```
    *The server will start at `http://localhost:5000` (default).*

## 🔐 Environment Variables

To run this project, you will need to add the following variables to your `.env` file:

`PORT` — Server port (e.g., 3000)  
`DEEZER_API_URL` — Base URL for Deezer API  
`MONGODB_URL` — Connection string for MongoDB  
`JWT_SECRET` — Private key for JWT token encryption  
`GOOGLE_CLIENT_ID` — Google OAuth Client ID  
`GOOGLE_CLIENT_SECRET` — Google OAuth Client Secret

## 📈 Future Enhancements
* **Hybrid Search**: Intelligent search logic returning track lists and "Best Match" artist profiles.
* **Google OAuth 2.0**: Secure social login integration.
* **Database Integration**: MongoDB storage for persistent user data and favorite tracks.
* **JWT Authentication**: Secure session management using JSON Web Tokens.
* **Discovery Engine**: Genre-based music exploration.
