# FirebaseFunctions
Informations about functions on Firebase/GoogleCloud

-- Entire code will be written in TypeScript, make sure to compile it.<br/>
-- Make sure to have installed Node.js and npm package management tool.<br/>


**Informations about  functionality of Firebase functions**
-- can be used to modified sendend image to storage to resize/cut/edit/change color via other plugins from npm package
-- can operate on realtime database from Firebase 
-- can be use as authentication server 
-- can be used as micro-service


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
- make sure to use TypeScript instead of JavaScript (easy to debug, less errors, ofcourse it is still javascript)
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




#### Deploying on Firebase Cloud Server
```sh
firebase deploy --only functions
```




#### Basic Configuration
-- in project/functions/src/index.ts<br/>
<br/>
add those linses:
```sh
import * as functions from 'firebase-functions';

export const myFirstFunction = functions.https.onRequest( (req, res)  => {

  //What we would like to get date -> as json 
  res.setHeader('Content-Type', 'application/json');
  
  // we send 
  return res.status(200).send({ status: "ok", message: "Hello World"});
});

```
<br/>
**Firebase functions use Express.js Framework based on Node.js Http Request-Response.**<br/>
-- read more -> [Express.js Documentation v.4.0](http://expressjs.com/en/api.html#express)
<br/>
##### Parsing data Post/Get/Options etc Methods.
<br/>
All requests to HTTPS triggered Cloud Functions are automatically parsed by Cloud Functions with an Express Body Parser before <br/>
the request reaches your code in the function. So even if you define your parser and middleware through Express,<br/>
it’s still already automatically parsed. And you can’t explicitly define the parser that is used by Cloud Functions, <br/>
the content-type of the request dictates that, as documented here. Thus, if you do not control the calling environment,<br/>
you cannot control the parsing of the data.<br/>
<br/>



#### Express.js as one function

In such approach you might use single function to run mutiple routes of one functions:
```sh
firebaseURL/function/ExpressRoutes[users, posts, addpost, register, ]
```

```sh
npm install --save express && npm install --save body-parser
```
<br/>
<br/>
source code: <br/>

```sh
const express = require('express');


const app = express();

app.get('/posts', (request, response) => {
    response.send({'Hello from Express based App'});
})

export const exppressBasedFunction = functions.https.onRequest(app )

```



# Cors, Origin, localhost, getting data
We can test localy but you need to set up admin-sdk of firebase localy.<br/>
But to do it you need to download emulator for that.<br/>
<br/>
I worked just on Mac and Linux based Os, on Windows you need to add this line to PATH:<br/>


```sh
#GOOGLE FIREBASE FUNCTIONS
export GOOGLE_APPLICATION_CREDENTIALS="/home/patryk/json/CREDENTIALS.json"
```


<br/>
How to obtain such file go to: 
<br/>
> [Genrate Credentials](https://console.cloud.google.com/apis/credentials/serviceaccountkey)

Select project -> generate json file for admin-sdk (everything) -> download and put to the folder (somewhere save) and copy path and put it back<br/>
to the ~/.bashrc or PATH on windows.<br/>
<br/>
Once you have that you can run command but from "project/functions/src" where the package.json is:
```sh
npm run serve      OR        firebase emulators:start
```

#### Cors testing from other frontend frameworks
You can use:
<br/>
```sh
import * as functions from 'firebase-functions';
const cors = require('cors');
export const myFirstFunction = functions.https.onRequest( (req, res)  => {


    //First Approch not good, just for testing or if you want that any has acces to function
    res.set('Access-Control-Allow-Origin','*'); 


    //Second approch use express cors, make sure to import or require cors at the top
    return cors(req, res, () => {
            //your code here
    });

  //What we would like to get date -> as json 
  res.setHeader('Content-Type', 'application/json');
  
  // we send 
  return res.status(200).send({ status: "ok", message: "Hello World"});
});


```



