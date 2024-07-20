# katloon
The futuristic e-commerce website

Student Name: Waris Walia
Student Number: 8981013
Date: 19 July, 2024

Technology Tech Stack
Frontend: ReactJS
Backend: Node.js with Express
Database: MongoDB

Project Setup
Project Initialization: Repository created on GitHub and cloned to local machine.

1. Frontend Setup: Initialized ReactJS project and directory structure
Backend Setup: Nodejs project with connection to MongoDB and Mongoose drivers

Database Schema Design

Products Schema (MongoDB)
name: String
description: String
price: Number
category: String
stock: Number
imageUrl: String

Users Schema (MongoDB)
username: String
password: String
email: String

Shopping cart Schema (MongoDB)
UserId: String
ProductId: String
Price: Number
imageUrl: string
Date: Date

Frontend Setup
ReactJs will be used to Manage and create frontend components and to save state of the components. I will use fetch for API calls.

Backend Setup
Express will be used as HTTP server to create CRUD operations and middleware layer and Data layer to talk to Database

Notes
The project is set up using Git and GitHub for version control.
