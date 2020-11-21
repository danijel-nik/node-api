# Node API
This is simple NodeJS & Express & MongoDB app which allows us to create and manage APIs. <br>
To run this app, please follow instructions below respectively:
## Create config.env
In `config` directory you have to create `config.env` file.
Please copy & paste content from `config/config-exaple.env` in file you've created and replace value for MONGO_URI with your real connection to the MongoDB. You can change and PORT also, but it is not required.
## Install dependencies
Go to root of this project, open terminal and run <br>
``` npm install ```
## Run dev server
In root of this project run <br>
``` npm run dev ```
## Local URL
Open your web browser or Postman app and type this address:
`http://localhost:9000/`. <br>
If you've changed PORT in `config/config.env` file, run that port instead 9000: `http://localhost:<PORT>/`
