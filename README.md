# MERN Todo List

A full-stack todo list application built with the MERN stack (MongoDB, Express.js, React, Node.js) featuring user authentication, categories, priorities, and a glassy dark theme.

## Features

- User registration and login
- JWT-based authentication
- Create, read, update, delete todos
- Todo categories (General, Work, Personal, Shopping)
- Priority levels (Low, Medium, High)
- Due dates
- Glassy dark theme UI
- Responsive design

## Prerequisites

- Node.js
- MongoDB
- npm or yarn

## Local Development

1. Copy `.env.example` to `.env` and add your `MONGO_URI` and `JWT_SECRET`
2. Install all dependencies:
   ```
   npm install
   ```
3. Start development servers:
   ```
   npm run dev
   ```
   (Server on port 5000, Client on 3000 with proxy to backend)

## Vercel Deployment

1. Install Vercel CLI globally:
   ```
   npm i -g vercel
   ```
2. Login to Vercel:
   ```
   vercel login
   ```
3. Deploy from project root:
   ```
   vercel
   ```
4. In Vercel dashboard, add Environment Variables:
   - `MONGO_URI`: Your MongoDB Atlas connection string (enable serverless)
   - `JWT_SECRET`: Secure random string (generate with `openssl rand -base64 32`)
5. Redeploy production:
   ```
   vercel --prod
   ```

Frontend is served as static files from `client/build`, backend routes as serverless functions at `/api/*`.

## Usage

- Register/login
- Manage your todos

## Technologies

(same)


## Technologies Used

- Backend: Node.js, Express.js, MongoDB, Mongoose, JWT, bcrypt
- Frontend: React, Axios, React Router, Tailwind CSS