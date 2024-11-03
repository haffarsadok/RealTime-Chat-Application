
# Real-Time Chat Application

This is a **Real-Time Chat Application** built using **React**, **Node.js**, **Socket.io**, and **MongoDB**. The application allows users to register, log in, and engage in real-time conversations. Users can view their chat history and see which friends are online.

## Features

- **User Authentication**: Users can register and log in to their accounts.
- **Real-Time Messaging**: Chat with friends instantly using Socket.io.
- **Chat History**: View previous conversations stored in the MongoDB database.
- **Online Friends List**: See which friends are currently online.

## Technologies Used

- **Frontend**: React + vite
- **Backend**: Node.js with Express
- **Database**: MongoDB
- **Real-Time Communication**: Socket.io
- 
## Screenshots 
<p align="center"> 
  <img src="https://github.com/user-attachments/assets/8602a174-6bc3-478d-a414-053e1e0bddcc" width="80%" /> 
  <img src="https://github.com/user-attachments/assets/87ce700c-0203-4b77-9c17-b9ecbc270855" width="80%" />    
</p>
<p align="center"> 
  <img src="https://github.com/user-attachments/assets/4b85891f-2b89-476f-b91f-7fedcb105f81" width="80%" /> 
  <img src="https://github.com/user-attachments/assets/94705eda-d5ca-4050-8c84-a81033770d46" width="80%" />    
</p>


## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/en/) (for both client and server)
- [MongoDB](https://www.mongodb.com/) (to store user data and chat history)

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/real-time-chat-app.git
   cd real-time-chat-app
   ```
2. **Install dependencies for the client:**:
  ```bash
    cd client
    npm install
   ```
3. **Install dependencies for the server:**:
 ```bash
    cd server
    npm install
   ```
## Running the Application
To run the application, you will need to open two command prompts for the client and server.

1. **Start the server:**:
Open a command prompt in the server directory and run:
 ```bash
   nodemon index.js
   ```
2. **Start the client:**:
Open another command prompt in the client directory and run:
 ```bash
   npm run dev
   ```
3. **Start the client:**:
Open another command prompt in the Socket directory and run:
 ```bash
   node index.js 
   ```
## Usage
Once the client , server and socket are running, you can open your web browser and go to http://localhost:5000 to access the application. You can register a new account or log in to an existing one to start chatting in real-time!


## License
This project is licensed under the MIT License.
