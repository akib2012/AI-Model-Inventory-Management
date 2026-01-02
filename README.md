🧠 AI Model Inventory Manager

Live Site URL: https://monumental-bubblegum-b4460a.netlify.app/

Client Repository: https://github.com/akib2012/-AI-Model-Inventory-Manager-client.git

Server Repository: https://github.com/akib2012/model-inventory-server-final.git

📘 Project Overview

The AI Model Inventory Manager is a full-stack web application designed to help users manage an inventory of AI models. It allows authenticated users to add, view, edit, delete, and purchase AI models while showcasing information such as the model’s framework, dataset, use case, and description.

This project connects React.js, Firebase Authentication, and MongoDB (via Express.js backend), creating a practical learning experience that mirrors real-world AI model management systems like Hugging Face and Model Zoo.

🚀 Live Features
✅ User Authentication (Email/Password + Google Sign-In)
✅ Private Routes Protection — reload-safe authentication
✅ CRUD Operations with MongoDB (Add, View, Edit, Delete)
✅ Purchase System with real-time purchase counter updates
✅ Search & Filter AI Models by Framework or Name
✅ My Models & My Purchases section for logged-in users
✅ Responsive Design for all devices (mobile, tablet, desktop)
✅ Dark/Light Mode Toggle across the entire website
✅ Dynamic Featured Models and Custom Error Page
✅ Deployed — Client on Netlify / Server on Vercel

💡 Why This Project?

This project bridges Web Development and Artificial Intelligence, providing hands-on experience with tools used by AI practitioners.
It simulates how AI models are cataloged and managed in real-world platforms like Hugging Face, making it educational, relevant, and practical.

🧩 Technologies Used
🖥️ Frontend:

React.js (Vite)

React Router

Firebase Authentication

Tailwind CSS

React Toastify

React Icons / Lucide React

Axios for API calls

⚙️ Backend:

Node.js

Express.js

MongoDB (Atlas)

dotenv (for environment variables)

Cors & Body-parser middleware

🧰 Others:

ImgBB API for image hosting

Netlify (Client Hosting)

Vercel (Server Hosting)

🧠 Core Pages Overview
Page	Route	Description
Home	/	Slider, Featured AI Models, About & Get Started sections
Add Model	/add-model	Add new AI models (Private)
All Models	/models	View all models with filter & search
Model Details	/models/:id	View details, purchase count, edit/delete if creator
My Models	/my-models	Shows models created by logged-in user
My Purchases	/my-purchases	Shows models purchased by logged-in user
Login/Register	/login, /register	Firebase authentication
Error Page	*	Custom 404 with navigation link


🔐 Authentication Flow

Firebase Authentication handles login/registration.

Google Sign-In supported.

Logged-in users remain authenticated even on route reload.

Only creators can edit/delete their models.

Operation	Route	Method	Description
Add Model	/add-model	POST	Adds new model to MongoDB
Get All Models	/models	GET	Fetch all models
Get Model by ID	/models/:id	GET	Fetch single model details
Update Model	/update-model/:id	PUT	Update model (creator only)
Delete Model	/models/:id	DELETE	Delete model (creator only)
Purchase Model	/purchase/:id	PATCH	Increment purchase count and save to purchase list

🌗 UI & Design Highlights

Modern, Glassmorphism + Gradient UI

Consistent font styles, button designs, and color scheme

Equal card height & responsive grid layouts

Smooth hover effects and transitions

Built fully with Tailwind CSS

Dark/Light theme toggle with full-site effect

🧮 Bonus Implementations (Challenge Features)

✅ Filter models by Framework (multi-select)

✅ Search by Model Name

✅ Purchase Counter updates in real-time

✅ Custom Loading Spinner on data fetch

✅ Toast notifications (no default alert used)

# Client
git clone https://github.com/yourusername/ai-model-inventory-client.git
cd ai-model-inventory-client
npm install
npm run dev

# Server
git clone https://github.com/yourusername/ai-model-inventory-server.git
cd ai-model-inventory-server
npm install
npm start

# Here’s a clear step-by-step guide to run your AI Model Inventory Manager locally (both client and server):
1️⃣ Clone the Repositories

Client:

git clone https://github.com/akib2012/-AI-Model-Inventory-Manager-client.git
cd -AI-Model-Inventory-Manager-client

Server:

git clone https://github.com/akib2012/model-inventory-server-final.git
cd model-inventory-server-final

2️⃣ Install Dependencies

Client:

npm install
Server:

npm install
3️⃣ Configure Environment Variables

Server (.env):

Create a .env file in the server folder with at least:

PORT=5000
MONGODB_URI=your_mongodb_connection_string
FB_SERVICE_KEY=your_firebase_service_account_json_string
STRIPE_SECRET_KEY=your_stripe_secret_key
Client (.env):

Create a .env file in the client folder if needed for Firebase config:

VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
4️⃣ Start the Servers

Server (Express + MongoDB):

npm start


By default, it will run on http://localhost:5000 (or the port you set).

Client (React Vite):
npm run dev
Vite will show a URL like http://localhost:5173 — open it in your browser.




🧑‍💻 Author

Perbej Bhuiyan Akib

📧 Email: akibbbhuiyan3544@gmail.com

🔗 GitHub: https://github.com/akib2012

🌐 Portfolio: https://akib2012.github.io/protfolio_project_central/

