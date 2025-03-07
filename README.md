# Web Application: User Management System

## Overview
This is a full-stack web application built with Angular 16 and [Spring Boot](https://github.com/baiching/Login-Registration-Spring-Security). It provides user authentication, registration, and role-based access control for different types of users: **User, Admin, and Moderator**.

## Features
- **User Authentication**: Secure login and registration system.
- **Role-Based Access Control**: Users are assigned different roles with access to specific functionalities.
- **Admin Dashboard**: Manage users and their roles.
- **Moderator Privileges**: Limited administrative functionalities.

## Technologies Used
### Frontend
- **Framework**: Angular 16
- **HTTP Client**: Angular HttpClient

### Backend
- **Framework**: Spring Boot
- **Authentication**: Spring Security with JWT
- **Database**: PostgreSQL
- **ORM**: Hibernate/JPA

## Installation & Setup
### Prerequisites
- Node.js & npm installed
- Java 17+ installed
- PostgreSQL
- Maven

### Backend Setup
Look at this repo for [backend](https://github.com/baiching/Login-Registration-Spring-Security) setup

### Frontend Setup
1. Navigate to the frontend folder:
   ```sh
   cd angular-auth-frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Run the Angular application:
   ```sh
   ng serve
   ```

### API Endpoints
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Authenticate user and return JWT
- `GET /api/users` - Get all users (Admin only)
- `GET /api/moderator` - Moderator-specific endpoint

## Usage
- Users can sign up and log in using their credentials.
- Admins can manage users and assign roles.
- Moderators have limited privileges.

## Contribution
Feel free to contribute by submitting issues or pull requests.

## License
This project is licensed under the [MIT License](LICENSE).

