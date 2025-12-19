# eTuitionBD - Tuition Management Platform

## 📖 Project Overview

**eTuitionBD** is a MERN stack powered role‑based tuition management platform. It features three separate dashboards — **Student**, **Tutor**, and **Admin**. User login and registration are handled through **Firebase Authentication**, followed by **JWT authentication** and **role‑based access control** to provide tailored functionality for each user. **Stripe payment integration** and a **modern UI design** make this project even more powerful and user‑friendly. 

--- 

## 🎯 Purpose

The purpose of **eTuitionBD** is to build a comprehensive digital platform for managing tuition services. It connects students seeking tuition, tutors offering teaching expertise, and admins supervising the system — all brought together in a secure, scalable, and user‑friendly environment.

--- 

## 👥 Roles & Responsibilities
This platform offers three distinct role‑based dashboards — **Student**, **Tutor**, and **Admin** — each designed with tailored features:

- **Students**  
  Empowered to manage their learning journey by:  
  - Creating new tuition posts (Add Tuition)  
  - Tracking and managing their own tuition posts (My Tuitions Post)  
  - Reviewing tutors who applied to their posts (Applied Tutors)  
  - Monitoring payment history (Payment History)  

- **Tutors**  
  Equipped with tools to manage teaching opportunities:  
  - Viewing and tracking their applications (My Applications)  
  - Viewing ongoing tuitions (Ongoing Tuitions)  
  - Reviewing revenue history (Revenue History)  

- **Admins**  
  Provided with full control to oversee the platform:  
  - Managing all users (User Management)  
  - Approving or rejecting tuition posts (Tuition Management)  
  - Accessing reports and analytics (Reports & Analytics)   


--- 

## ✨ Key Features

### 🔐 Security & Access
- JWT authentication with secure role‑based access

### 💳 Payments
- Stripe payment integration

### 📊 Analytics
- Data visualization & analytics with **Recharts**, used in the Admin Dashboard to display platform statistics.

### 🎨 User Experience
- Role‑based dashboards (Student, Tutor, Admin)
- Real‑time feedback system with SweetAlert2 and Toast libraries
- Interactive UI with Framer Motion and Swiper

--- 

## 🌐 Live Demo
👉 [eTuitionBD Live Site](https://e-tuition-bd-296b7.web.app) 

## 📂 GitHub Repositories 
- [Client Repository](https://github.com/Islamul-Hoque/eTuitionBd-client) 
- [Server Repository](https://github.com/Islamul-Hoque/eTuitionBd-server)

--- 

## 🛠️ Tech Stack

### 🌐 Frontend
- React.js (Component‑based UI)
- TailwindCSS (Utility‑first styling)
- Framer Motion (Animations)
- Swiper.js (Interactive sliders)
- Recharts (Data visualization)
- SweetAlert2 & React‑Toastify (User feedback system)

### ⚙️ Backend
- Node.js & Express.js (REST API development)
- MongoDB (Database with multi‑collection schema)

### 🔑 Authentication
- Firebase Authentication (User login & registration)
- JWT (Secure session management & role‑based access)


### 💳 Payments
- Stripe (Online payment processing)

### 🛠️ Tools & Others
- Axios (HTTP requests)
- TanStack Query (Data fetching & caching)
- Vite (Fast development build tool)

--- 

## 🧭 Run the Project Locally

### 1. Clone Repositories
### Client (Frontend):

```
git clone https://github.com/Islamul-Hoque/eTuitionBd-client.git
cd eTuitionBd-client
```
### Server (Express + MongoDB Backend):

```
git clone https://github.com/Islamul-Hoque/eTuitionBd-server.git
cd eTuitionBd-server
```

### 2. Install Dependencies

```
npm install
```

### 3. Setup Environment Variables

## 🌐 Frontend `.env` :

```
- VITE_apiKey = Firebase API key  
- VITE_authDomain = Firebase auth domain  
- VITE_projectId = Firebase project ID  
- VITE_storageBucket = Firebase storage bucket  
- VITE_messagingSenderId = Firebase messaging sender ID  
- VITE_appId = Firebase app ID  
- VITE_image_host_key = Image hosting API key  
```

## ⚙️ Backend `.env` :

```
- DB_USER = MongoDB database user  
- DB_PASS = MongoDB database password  
- STRIPE_SECRET = Stripe secret key  
- SITE_DOMAIN = Deployed site domain  
- JWT_SECRET = Secret key for JWT authentication
```

### 4. Start Development Servers
**Backend:**

```
nodemon index.js
```

**Frontend:**
```
npm run dev
```

### 5. Access the Application

Frontend → [http://localhost:5173](http://localhost:5173)     
Backend API → [http://localhost:3000](http://localhost:3000)

---

## 🛠 Build & Deploy

### 🔧 Build for Production 
```
bash npm run build
```

### 🚀 Start Production Server

```
npm start
```

--- 

# 🌍 Deployment Guide

### Frontend (Vite + React)
- Deploy on **Firebase Hosting** (recommended for seamless integration with Firebase services)  
- Or use **Netlify** (optional alternative for static hosting + CI/CD)  

### Backend (Express + MongoDB)
- Deploy on **Vercel** (serverless functions, GitHub integration for auto deploys)  
- Alternative: **Render / Railway / Cyclic** (for full Node.js server hosting with MongoDB support)  

--- 

## 👤 Author

**Islamul Hoque**  
*MERN Stack Web Developer*  

**Location: Chattogram, Bangladesh**   
**Email: islamulhoque2006@gmail.com**

🔗 **Social Links:**  
- [GitHub](https://github.com/Islamul-Hoque)  
- [LinkedIn](https://linkedin.com/in/islamul-hoque)
- [Facebook](https://facebook.com/ISLAMUL.HOQUE.ISHFAK.OFFICIAL)  

--- 