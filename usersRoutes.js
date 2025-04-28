// TODO: Import express and your User model
import express from "express";
// TODO: Create an express router
var router = express.Router();
// TODO: Create POST route for user registration (/api/users/register)
// 1. Check if a user with the given email already exists
// 2. If not, create a new user with the request body data
// 3. Return the new user (without the password) with status 201

// TODO: Create POST route for user login (/api/users/login)
// 1. Find the user by email
// 2. Check if the password matches
// 3. If authentication successful, return user info (without password)
// 4. If authentication fails, return appropriate error message
