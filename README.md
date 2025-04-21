Bot Battlr
A React application for browsing, enlisting, and managing your robot army.

Browse through a list of available bots
View bot details
Enlist bots into their army
Release bots from their army
Discharge bots from service permanently

Features
Core Features

View profiles of all bots in the BotCollection
Add bots to your army by clicking on them (bots can only be enlisted once)
Release bots from your army by clicking on them in the YourBotArmy component
Discharge bots permanently with the "X" button, removing them from both frontend and backend

Installation and Setup

Clone this repository

Navigate to the project directory

cd bot-battlr-challenge

Install dependencies

npm install

Set up the JSON server with the provided data

npm install -g json-server

Create a db.json file with the bot data
Start the JSON server

json-server --watch db.json --port 8001

In a new terminal, start the React application


Technologies Used

React
CSS
JSON Server for the backend API

Project Structure

App.js: Main component that manages state and renders child components
BotCollection.js: Displays all available bots
YourBotArmy.js: Shows the enlisted bots
BotCard.js: Reusable component for individual bot displays

API Endpoints

GET /bots: Fetch all available bots
DELETE /bots/:id: Remove a bot permanently

Future Enhancements

Implement bot filtering by class
Add sorting capabilities by health, damage, or armor
Create a detailed view for individual bots
Restrict enlistment to one bot per class

Author
Abigail chelangat