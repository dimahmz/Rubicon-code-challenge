# Rubicon-code-challenge

This repository contains a code challenge project with both back-end and front-end components.

### To run the project :

#### Back-end

**Navigate to this folder**

`cd back-end`

**Set up environment variable**

Rename the .env.example file to .env

Update the following environment variables in the .env file with your MongoDB database information :

db_password= (Your database password)
user_name= (Your database username)

**install the depedencies**

`npm i`

**start the back-end server**

`node index.js`

#### Front-end

**navigate to this folder**

`cd front-end`

**change the environment variable**

Rename the .env.example file to .env

Update the VITE_BACK_END_API variable in the .env file:

Set it to localhost or your local IP address.

Ensure the port matches the one used in the Back-end (default: 8000).

**install the depedencies**

`npm i`

**start vite server**

`npm run dev`
