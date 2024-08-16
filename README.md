# katloon
The futuristic e-commerce website

**Student Name:** Waris Walia<br/>
**Student Number:** 8981013<br/>
**Date:** 19 July, 2024<br/>

**Technology Tech Stack**
> Frontend: ReactJS<br/>
> Backend: Node.js with Express<br/>
> Database: MongoDB<br/>

** Setup**
Project Initialization: Repository created on GitHub and cloned to local machine.

1. **Frontend Setup:** Initialized ReactJS project and directory structure
Backend Setup: Nodejs project with connection to MongoDB and Mongoose drivers

**Database Schema Design**

**Products Schema (MongoDB)**
name: String
description: String
price: Number
category: String
stock: Number
imageUrl: String

**Users Schema (MongoDB)**
username: String
password: String
email: String

**Shopping cart Schema (MongoDB)**
UserId: String
ProductId: String
Price: Number
imageUrl: string
Date: Date

**Frontend Setup**
ReactJs will be used to Manage and create frontend components and to save state of the components. I will use fetch for API calls.

**Backend Setup**
Express will be used as HTTP server to create CRUD operations and middleware layer and Data layer to talk to Database

**Notes**
The project is set up using Git and GitHub for version control
Sir i check the 10 test manually
1st: I added the suit 1 and jean it give details to me in my cart page.
2nd: when i enter name only do not proceed further 
3rd: When i enter name and email it also not moving proceed.
4th: When i enter all the things it procced to my final page details.
5th: I enter all details with showing me total price with tax.
6th: When i click the add to cart the product added.
7th: When i added the more products means more than 1 it also show me details.
8th: When i added wrong product it give me error.
9th: It show also quanity of the my products of the application.
10th: My all details show in the summary page.

Github:-> https://github.com/wariswalia326/katloon
