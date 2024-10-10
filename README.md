

# 🍕 Food Delivery App

This repository contains the source code for a **Food Delivery Application** built using **React**, **CSS**, **Node.js**, **MongoDB**, and **Vite**. The application is divided into two main sections: the **frontend** for user interactions and the **admin panel** for managing orders, restaurants, and more. The backend supports both with **Node.js** and **MongoDB**.

---

## 📂 Repository Structure

The project is organized into separate branches for ease of development:

1. **frontend branch:** Contains the code for the **user-facing UI**.
2. **admin-panel branch:** Contains the code for the **admin interface**.
3. **main (default) branch:** Contains the **backend code** handling API endpoints, database interactions, and server-side logic.

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/food-delivery-app.git
cd food-delivery-app
```

### 2. Checkout the Branches

- **Frontend UI:**  
  ```bash
  git checkout frontend
  ```
  
- **Admin Panel UI:**  
  ```bash
  git checkout admin-panel
  ```

- **Backend:**  
  The backend code is on the default `main` branch:
  ```bash
  git checkout main
  ```

---

## 🛠️ Tech Stack

### Frontend:
- **React**: Component-based UI development
- **Vite**: For fast builds and development
- **CSS**: Styling for the user interface

### Admin Panel:
- **React**: For building the admin dashboard
- **Vite**: Same development environment as the frontend
- **CSS**: Styling the admin interface

### Backend:
- **Node.js**: Server-side logic and API handling
- **Express.js**: To handle HTTP requests
- **MongoDB**: NoSQL database to store user, order, and restaurant data
- **Mongoose**: For MongoDB object modeling

---

## 🖥️ Running the Application

### 1. Running the Frontend (User Interface)

Navigate to the **frontend** branch:

```bash
git checkout frontend
cd frontend
npm install
npm run dev
```

### 2. Running the Admin Panel

Navigate to the **admin-panel** branch:

```bash
git checkout admin-panel
cd admin-panel
npm install
npm run dev
```

### 3. Running the Backend

Ensure you're on the **main** branch:

```bash
git checkout main
cd backend
npm install
npm start
```

---

## 📄 Features

### User Interface (Frontend):
- Browse menus
- Add items to the cart and place orders
- User authentication and profile management
- Real-time updates on order status

### Admin Panel:
- Manage restaurants, menus, and orders
- Track customer orders and update statuses
- Monitor revenue and other analytics

### Backend:
- RESTful API endpoints for managing data
- User authentication with JWT
- Data stored in MongoDB (orders, users, restaurants)
- Real-time updates using WebSockets (optional)

---

## 📂 Folder Structure

### Frontend (User UI)
```
frontend/
  ├── src/
      ├── components/
      ├── pages/
      ├── styles/
      ├── services/
      └── App.jsx
  └── vite.config.js
```

### Admin Panel
```
admin-panel/
  ├── src/
      ├── components/
      ├── pages/
      ├── styles/
      ├── services/
      └── App.jsx
  └── vite.config.js
```

### Backend
```
backend/
  ├── controllers/
  ├── models/
  ├── routes/
  ├── server.js
  └── config/
```

---

## 🌱 Environment Variables

For the backend, create a `.env` file in the `backend/` folder with the following content:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000
```

---

## 📫 How to Reach Me

- **Email:** [salonikareer60@gmail.com](mailto:salonikareer60@gmail.com)
- **Instagram:** [frontend_perfection](https://www.instagram.com/frontend_perfection/)
- **LinkedIn:** [linkedin.com/in/saloni-kareer](https://linkedin.com/in/saloni-kareer)

---

### License

This project is licensed under the MIT License.
