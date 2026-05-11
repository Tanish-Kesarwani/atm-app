# 💳 ATM Management System

A secure and interactive full-stack ATM simulation web application built using **React.js**, **Node.js**, **Express.js**, and **Sequelize (SQL)**.

This project simulates core ATM functionalities such as secure authentication, balance inquiry, deposits, withdrawals, and transaction history through a modern fintech-inspired dashboard interface.

---

## 🚀 Live Demo

### 🌐 Frontend Deployment
🔗 https://atm-app-d5t2-pa1kzy8c4-tanish20.vercel.app

### 🎥 Project Demo Video
🔗 https://drive.google.com/file/d/1dXV18AnEbcAgqOabAV_XjMCDoVbB30XF/view?usp=sharing

---

# ✨ Features

## 🔐 Authentication
- Secure login using Email + 4-digit PIN
- JWT-based authentication
- Protected dashboard access

## 🏦 Dashboard
- Displays account holder information
- Shows real-time account balance
- Fintech-style dashboard UI

## 💰 Transactions
- Deposit money into account
- Withdraw money securely
- Insufficient balance validation
- Real-time balance updates

## 📜 Transaction History
- View recent transaction logs
- Includes:
  - Transaction type
  - Amount
  - Date & time

## 🔒 Session Security
- Token-based session handling
- Logout functionality
- Protected routes

## 🎨 UI/UX
- Responsive SPA architecture
- Modern dark fintech design
- Sidebar navigation layout
- Built with Tailwind CSS

---

# 🛠️ Tech Stack

## Frontend
- React.js
- TypeScript
- React Router DOM
- Tailwind CSS
- Axios
- Lucide React Icons

## Backend
- Node.js
- Express.js
- Sequelize ORM
- SQLite

## Tools & Platforms
- Git & GitHub
- Vercel (Frontend Hosting)
- Railway / Render (Backend deployment attempts)

---

# 📂 Project Structure

```bash
atm-app/
│
├── client/              # React Frontend
│
├── server/              # Express Backend
│
├── README.md
│
└── .gitignore
```

---

# ⚙️ Local Setup Instructions

## 1️⃣ Clone Repository

```bash
git clone https://github.com/Tanish-Kesarwani/atm-app.git
```

---

# 🔧 Backend Setup

## Navigate to server directory

```bash
cd server
```

## Install dependencies

```bash
npm install
```

## Create `.env` file

```env
JWT_SECRET=your_secret_key
PORT=5000
```

## Start backend server

```bash
node server.js
```

Backend runs on:

```bash
http://localhost:5000
```

---

# 💻 Frontend Setup

## Navigate to client directory

```bash
cd client
```

## Install dependencies

```bash
npm install
```

## Start frontend server

```bash
npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

# 🔌 API Endpoints

## Authentication

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/auth/register` | Register new user |
| POST | `/api/auth/login` | Authenticate user |

---

## Account

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/account` | Get account details & balance |

---

## Transactions

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/transaction/deposit` | Deposit money |
| POST | `/api/transaction/withdraw` | Withdraw money |
| GET | `/api/transaction/history` | Get transaction history |

---

# ✅ Functionalities Implemented

- JWT Authentication
- Register & Login System
- Protected Routes
- Real-Time Balance Updates
- Deposit & Withdrawal Operations
- Transaction History Tracking
- Error Handling & Validation
- Responsive SPA Architecture
- Modern Dashboard UI
- Secure Session Handling

---

# ⚠️ Note on Backend Deployment

The backend works successfully in the local environment.

Cloud deployment for the SQLite-based backend encountered native binary compatibility issues (`sqlite3` + Linux GLIBC dependency) on free hosting platforms such as Render and Railway.

Frontend deployment is fully functional on Vercel.

---

# 👨‍💻 Author

### Tanish Kesarwani

🔗 GitHub:  
https://github.com/Tanish-Kesarwani

---

# 📄 License

This project was developed for educational and internship assignment purposes.