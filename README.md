
# Cakify

Welcome to **Cakify**, an e-commerce platform where users can buy delicious cakes! Our web app features a user-friendly interface for customers to browse and purchase cakes, as well as an admin panel for managing products and orders.

## Features

- **User Interface**
  - Browse and search for cakes
  - Add cakes to cart and manage cart items
  - User authentication and authorization (JWT)
  - Checkout and order management
  - Responsive design with TailwindCSS and FlyonUI

- **Admin Panel**
  - Add, edit, and delete cake products
  - Manage orders and user information
  - Secure access with JWT-based authentication

## Technologies Used

- **Frontend**
  - JavaScript
  - React.js
  - Zustand (state management)
  - Context API (global state management)
  - TailwindCSS (styling)
  - FlyonUI (UI components)

- **Backend**
  - Node.js
  - Express.js (server framework)
  - MongoDB (database)
  - Multer (file uploads)
  - JWT (authentication)

## Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB database setup

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/username/cakify.git
   cd cakify
   ```

2. Install dependencies for both frontend and backend:
   ```sh
   cd backend
   npm install
   cd ../frontend
   npm install
   ```

3. Create a `.env` file in the backend directory and add your environment variables:
   ```sh
   MONGO_URI=<Your MongoDB URI>
   JWT_SECRET=<Your JWT Secret>
   ```

### Running the App

1. Start the backend server:
   ```sh
   cd backend
   npm start
   ```

2. Start the frontend development server:
   ```sh
   cd frontend
   npm start
   ```

3. Open your browser and navigate to `http://localhost:3000` to access the app.

## Usage

### User

1. Sign up or log in to your account.
2. Browse cakes and add your favorite ones to the cart.
3. Proceed to checkout and place your order.
4. Track your order status from your account dashboard.

### Admin

1. Log in to the admin panel using your credentials.
2. Manage cake products by adding, editing, or deleting them.
3. View and manage customer orders.
4. Access user information and perform administrative tasks.

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

## Acknowledgments

Special thanks to the developers and contributors who made this project possible.

---

😊🍰
