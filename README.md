# 📚 Student Resource Management Portal
![React](https://img.shields.io/badge/React-18.x-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-Build%20Tool-purple?logo=vite)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow?logo=javascript)

![Node.js](https://img.shields.io/badge/Node.js-22.x-green?logo=node.js)
![Express](https://img.shields.io/badge/Express.js-Backend-black?logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-brightgreen?logo=mongodb)

![JWT](https://img.shields.io/badge/Auth-JWT-orange?logo=jsonwebtokens)
![Multer](https://img.shields.io/badge/File%20Upload-Multer-blue)
![Axios](https://img.shields.io/badge/API-Axios-informational?logo=axios)

![Bootstrap](https://img.shields.io/badge/UI-Bootstrap-purple?logo=bootstrap)
![CSS](https://img.shields.io/badge/Style-CSS3-blue?logo=css3)

![Git](https://img.shields.io/badge/Version%20Control-Git-red?logo=git)
![GitHub](https://img.shields.io/badge/Code-GitHub-black?logo=github)

![Render](https://img.shields.io/badge/Backend-Render-blue?logo=render)
![Vercel](https://img.shields.io/badge/Frontend-Vercel-black?logo=vercel)

![Project](https://img.shields.io/badge/Project-Full%20Stack%20MERN-success)
![Status](https://img.shields.io/badge/Status-Completed-success)
![License](https://img.shields.io/badge/License-Learning%20Project-orange)


### Project Link: https://student-resource-management-system.vercel.app/

A full-stack MERN application that allows students to securely upload, manage, and access academic resources.

---

## 🚀 Features

- User Authentication (Register / Login with JWT)
- Protected Routes using Token-based Authentication
- Upload Resources (PDF, Notes, Files, etc.)
- View Personal Uploaded Resources
- Delete Resources (Only by Owner)
- File Upload using Multer
- Secure API with JWT Middleware

---

## 🛠️ Tech Stack

**Frontend:**

- React.js
- React Router DOM
- Axios
- Bootstrap

**Backend:**

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (JSON Web Token)
- Multer

---

## 📂 Project Structure

frontend/
├─ src/
│ ├─ api/
│ ├─ components/
│ ├─ pages/
│ ├─ utils/
│ └─ context/

backend/
├─ controllers/
├─ routes/
├─ middleware/
├─ models/
└─ uploads/

---

## 📸 Screenshots

### 🏠 Home Page
The landing page of the Student Resource Management Portal, providing a brief overview of the platform with options to get started or log in.
![Home](screenshots/Home.png)

### 📝 Register Page
New users can create an account by providing their name, email, and password.
![Register](screenshots/Register.png)

### ✅ Registration Successful
Confirmation message displayed after successful user registration.
![Registration Successful](screenshots/RegisterSuccessful.png)

### 🔐 Login Page
Allows registered users to securely log in using their email and password.
![Login](screenshots/Login.png)

### 📊 Dashboard
The main dashboard where users can navigate to upload resources or view their uploaded materials.
![Dashboard](screenshots/Dashboard.png)

### 📤 Upload Resource
Users can upload academic resources by providing a title, subject, and selecting a file.
![Upload Successful](screenshots/UploadSuccessful.png)

### 📚 View Resources
Displays a list of uploaded resources with options to view or delete them.
![View Resources](screenshots/View.png)

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name

### 2️⃣ Backend Setup
cd backend
npm install

Create a .env file
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=mySecretKey
PORT=3003

Run the server
npm start

### 3️⃣ Frontend Setup
cd frontend
npm install
npm run dev
```

---

### 🔐 API Endpoints
Method	Endpoint	Description
POST	/api/auth/register	Register User
POST	/api/auth/login	Login User
POST	/api/resources	Upload Resource (Protected)
GET	/api/resources	Get User Resources
DELETE	/api/resources/:id	Delete Resource (Protected)

---

### 🧪 Authentication Flow

On successful login, JWT is stored in localStorage

Axios Interceptor automatically attaches token to every request

Backend validates token using Middleware

---

### 👩‍💻 Author

Anvesha Goydani

GitHub: https://github.com/anvesha987

LinkedIn: https://www.linkedin.com/in/anvesha-goydani-b7b774293

---
