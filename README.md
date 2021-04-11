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
    This route is to signin as an user. 
    ```bash
    reqBody = {
        "name": <name>,
        "email": <email>,
        "password": <password>
    }
    ```
 2. /user/login (GET)
    This route is to login as an user. 
    ```bash
    reqBody = {
        "email": <email>,
        "password": <password>
    }
    ```
 3. /user/logout (POST)
    This route is to logout as an user.
 4. /donor/register (POST)
    This route is to register as a blood donor. This is the only protected route where user needs to be logged in to call this API.
    ```bash
    reqBody = {
        "mobile": <mobile number>,
        "bloodGroup": <blood group>,
        "area": [<list of areas where (s)he is able to donate blood>]
    }
    ```
 5. /donor/donorArea (GET)
    This route will bring all the donor of a particular area 
    ```bash
    reqBody = {
        "area": <name of the area where blood is required>
    }
    ```
 6. /donor/donorBloodGroup (GET)
    This route will list all the donor of a particular blood group of all regions
    ```bash
    reqBody = {
        "bloodGroup": <required blood group>
    }
    ```
 7. /donor/donorBloodGroupArea (GET)
    This route will list all the donor of a particular blood group of a particular area
    ```bash
    reqBody = {
        "area": <name of the area where blood is required>,
        "bloodGroup": <required blood group>
    }
    ```
