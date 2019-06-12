# FirebaseFunctions
Informations about functions on Firebase/GoogleCloud

-- Entire code will be written in TypeScript, make sure to compile it.<br/>
-- Make sure to have installed Node.js and npm package management tool.<br/>


### Install FirebaseCLI
```sh
 npm install -g firebase-tools
```


To make sure to the latest functionality in your project unistall and install:

```sh
npm install firebase-functions@latest firebase-admin@latest --save
```

not globaly but inside of the project.



You need to login, you will be prompt by browser to login or choose google account
to login.

```sh
firebase login
```

To init project with functions call in the folder named as your choice:

```sh
firebase init functions
```

when you will start to run this command it will prompt about few details:
- make sure to use TypeScript instead of JavaScript (easy to debug, less errors, ofcourse it is still javasript)
- Select Project of Firebase, Check firebase console to create one


When you use firebase init you can select others functionality of Firebase such as:
- Storage
- Hosting
- RealTimeDatabase/Database/Firestore

Also there is another approach you can init package.json by:

```sh
npm init
```

next install firebase tools: 

```sh
npm install --save firebase-functions@latest
```

#### Folder Structure and files:
```sh
myproject
 +- .firebaserc    # Hidden file that helps you quickly switch between
 |                 # projects with `firebase use`
 |
 +- firebase.json  # Describes properties for your project
 |
 +- functions/     # Directory containing all your functions code
      |
      +- .eslintrc.json  # Optional file containing rules for JavaScript linting.
      |
      +- package.json  # npm package file describing your Cloud Functions code
      |
      +- index.ts      # main source file for your Cloud Functions code
      |
      +- node_modules/ # directory where your dependencies (declared in
                       # package.json) are installed
```




##### Deploying on Freibase Cloud Server

