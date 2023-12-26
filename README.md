# Passport.js Codealong

## Installation Instructions

### Server side

- Before beginning, make sure you create a DB in MySQL with the name supplied in `knexfile.js`, in this case `testrun_passport`. You can use a GUI or `mysql -u root -p`, followed by your database password for root and the MySQL command `CREATE DATABASE testrun_passport;`.
- Edit `/server/knexfile.js` with the appropriate DB credentials
- Edit the following variables on `/server/.env` if necessary:
  - `GITHUB_CLIENT_ID` with your own GitHub credentials, if necessary
  - `GITHUB_CLIENT_SECRET` with your own GitHub credentials, if necessary
  - `GITHUB_CALLBACK_URL` if using a server port different than 5050
  - `CLIENT_URL` if using a client port different than 3000
- In one terminal tab:

    ```bash
    cd server
    npm install
    npm run migrate # updates the DB to the current schema
    npm run seed    # seeds the DB
    npm run dev     # starts the development environment, defaults at port 5050 
    ```

### Client side

- Edit the `REACT_APP_SERVER_URL` variable on `/client/.env` if not using Port 5050 as a server
- In a second terminal tab:

    ```bash
    cd client
    npm run start
    ```
