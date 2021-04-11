# BlooDonate

## Installation
```bash
git clone https://github.com/kaziMashry/BlooDonate.git
npm install
npm start
```
## Setup
 - Add .env file
 - Add these variables into .env file:
    - URI(mongoDb uri)
    - PORT
    - JWT_EXPIRE_MINUTE
    - JWT_SECRET

## What is BlooDonate repository?
BlooDonate repository contains the BE code. Basically here I created some API by which one can regiseter as a blood donor by signing in. On the other hand, one can find-
 1. all the blood donors of a certain area(of any blood group), 
 2. all the blood doner of a particular blood group(of any area), 
 3. all the blood donor of a certain area with a particular blood group

## Technology used
 - Node Js
 - Express Js
 - MongoDB
 - Mongoose
 - JWT

## Authentication


## API list
 1. /user/signin (POST)
    This router is to signin as a user. 
    ```bash
    reqBody = {
        "name": <name>,
        "email": <email>,
        "password": <password>
    }
    ```
 2. /user/login (GET)
 3. /user/logout (POST)
 4. /donor/register (POST)(protected route)
 5. /donor/donorArea (GET)
 6. /donor/donorBloodGroup (GET)
 7. /donor/donorBloodGroupArea (GET)
