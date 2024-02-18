**Register and Login System using React and Bootstrap**

---

## Overview

This project consists of two separate components: a frontend built using React framework and Bootstrap for styling, and a backend component. The backend component is responsible for handling user authentication and runs on port 9002.

## Frontend

The frontend component provides a user-friendly interface for users to register themselves and subsequently log in to access their accounts. It includes features such as user registration, login, responsive design, and form validation.

## Backend

The backend component, running on port 9002, handles user authentication, registration, and login. It communicates with the frontend to process user requests and maintain user sessions securely.

## Installation

### Frontend

1. Clone the frontend repository:

   ```bash
   git clone[ https://github.com/pavan77749/Login-Register-System/tree/main/login-register-frontent.git]
   ```

2. Navigate to the frontend project directory:

   ```bash
   cd login-register-frontent
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. Open your browser and navigate to `http://localhost:3000` to view the frontend application.

### Backend

1. Clone the backend repository:

   ```bash
   git clone[ https://github.com/pavan77749/Login-Register-System/tree/main/login-register-backent.git]
   ```

2. Navigate to the backend project directory:

   ```bash
   cd login-register-backent
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the backend server:

   ```bash
   nodemon index.js
   or
   node index.js
   ```

   The backend server should now be running on port 9002.

## Usage

1. **Registering a New Account:**

   - Navigate to the registration page on the frontend.
   - Fill in the required information, including fullname, email, and password.
   - Click on the "Register" button to create your account.

2. **Logging In:**

   - Navigate to the login page on the frontend.
   - Enter your registered email and password.
   - Click on the "Login" button to access your account.



## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, feel free to open an issue or submit a pull request to the respective frontend or backend repositories.

## License

This project is licensed under the [MIT License](LICENSE).

---
