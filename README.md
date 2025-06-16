# MD5 Hash Generator

- Matheus Monteiro
- Gabriel Alderige

## Modules (Node.JS - Flask)

This project consists of two modules: a Flask application - as a backend service to compute MD5 hashes, and a Node.js application - as a frontend service and graphical interface.

## REST API

The Node.js is the REST Client, sending a HTTP POST Request encoded in JSON to the endpoint to access the /md5 resource. The Flask is the REST Server, returning a HTTP Response formatted in JSON.

Communication is asynchronous between components.
The Node.js application uses Axios to send HTTP Requests without blocking the main thread. And the Flask backend simulates processing latency using `time.sleep(10)`.

## System Architecture

```
[Browser Interface] (Node.js at http://localhost:3000)
 |
 v
[POST /md5 HTTP/1.1] (Node.js sends the request)
 |
 v
[Flask] (http://localhost:5000/md5)
 |
 v
[MD5 Hash Calculation] (Extracts the text field from the JSON payload and calculates the hash)
 |
 v
[HTTP/1.1 200 OK] (Flask sends the response)
 |
 v
[Node.js] (Extracts the md5 field from the JSON payload and updates the browser)
 |
 v
[Browser Interface]
```
## 📦 Installation

- Requirement: Python 3.6+ and Node.js (v12+ recommended) & npm installed

- Set Up and Run the Project

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone

# Step 2: Navigate to the flask/ directory:
cd flask

# Step 3: Install the required Python dependencies:
pip install flask

# Step 4: Run the Flask server:
python3 app.py

# Step 5: Navigate to the nodejs/ directory:
cd nodejs

# Step 6: Install the Node.JS necessary dependencies (express, axios, body-parser).
npm install

# Step 7: Run the Node.js application:
node app.js

# Acess your web browser and navigate to:
http://localhost:3000
```
