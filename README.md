# 📚 Student Resource Management Portal

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

---

🔐 API Endpoints
Method	Endpoint	Description
POST	/api/auth/register	Register User
POST	/api/auth/login	Login User
POST	/api/resources	Upload Resource (Protected)
GET	/api/resources	Get User Resources
DELETE	/api/resources/:id	Delete Resource (Protected)

---

🧪 Authentication Flow

On successful login, JWT is stored in localStorage

Axios Interceptor automatically attaches token to every request

Backend validates token using Middleware

---

### 📸 Screensshots

![alt text](screenshots/Home.jpg)
![alt text](screenshots/Register.jpg)
![alt text](screenshots/RegisterUser.jpg)
![alt text](screenshots/LoginUser.jpg)
![alt text](screenshots/Login.jpg)
![alt text](screenshots/Dashboard.jpg)
![alt text](screenshots/Upload.jpg)
![alt text](screenshots/UploadResource.jpg)
![alt text](screenshots/View.jpg)

---

👩‍💻 Author

Anvesha Goydani

GitHub: https://github.com/anvesha987

LinkedIn: https://www.linkedin.com/in/anvesha-goydani-b7b774293




