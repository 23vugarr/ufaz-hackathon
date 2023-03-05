UFAZ HACKATHON -> 3LEET 
## Authors

- Vugar Abdulaliyev
- Murad Baghirli
- Gultaj Seyid




## Documentation

The project done by 3leet team. We intend to make crypto trades and analytics easier for Azerbaijani people and Akart users.

To start with our project please follow the guide.
- Our application is consisted of 4 main servers.
- API server, Backend Server, React Server, Mysql Server
- We need to run each instances seperately in order to make them communicate.




## Installation

To install dependencies for backend:
```bash
    cd ./3leet/backend
    npm install
```

To install dependencies required for front-end:
```bash
    cd ./3leet/front-end/client
    npm install
```

    
## Run Locally

Go to the project directory

To run backend server:
```bash
  cd ./3leet/backend
  npm run dev
```

To run FastApi server

```bash
    cd ./3leet/api
    uvicorn dashboard_api:app --reload --port 8080
```

To run React server

```bash
    cd ./3leet/front-end/client
    npm start
```

To init database: plase copy and run in your mysql shell;
```bash
    cd ./3leet/database
```
Then copy init.sql and paste it into your mysql shell.

