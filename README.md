# Node.js Server Port Already in Use Error

This repository demonstrates a common Node.js error: attempting to bind a server to a port that is already in use.  The `server.js` file contains the problematic code, while `serverSolution.js` offers a solution.

## Problem

The `server.js` file creates a simple HTTP server. If you run this server and then try to run it again immediately without stopping the first instance, you'll encounter an error because the port is already occupied.

## Solution

The `serverSolution.js` file provides a solution using a try-catch block to handle the `EADDRINUSE` error gracefully. This allows the application to check if the port is available before attempting to listen, presenting a better user experience and preventing application crashes.