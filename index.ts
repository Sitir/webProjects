// Make sure to have installed firebase-function in pacakage.json || npm install --save firebase-functions
import * as functions from 'firebase-functions';
//Make sure to have installed firebase-admin in package.json || npm install --save firebase-functions
import * as admin from 'firebase-admin';
//Make sure to have installed jsonwebtoken in pacakage.json || npm install --save jsonwebtoken
import * as jwt from 'jsonwebtoken';
//Make sure to ahve installed bcrypt in package.json || npm install --save bcrypt
const bcrypt = require('bcrypt');
//Key to the application generate via Firebase Console in Browser (Project's Settings)
const serivceAccount = require('../key.json');


//Create and init admin so you can access others functionality of Firebase in Functions such call Backend
// there are more options to storage authentication etc.
admin.initializeApp({
    credential: admin.credential.cert(serivceAccount),
    databaseURL: "PROJECTDATBASEURL"
  });

//We init db instances to firestore where we will read and push data 
const db = admin.firestore();





/***********************************************************************
******                  Functions for create and login users        ****
******                  THE SAME APPROACH AS AUTHENTICATION         ****
******                                                              ****
************************************************************************/




//Creating User
export const createUser = functions.https.onRequest( async (req, res)  => {
    res.set('Access-Control-Allow-Origin','*'); 
        methodPost(req,res);
   
        const _collectionUsers = db.collection('Users');
        const _userExist =  await _collectionUsers.where('email', '==', req.body.email).get().then( (snp) => {
                return (snp.size >= 1 ? true : false);
        }).catch((er) => console.log(er));

        if(_userExist){return res.send({error:true, messageError: "Users Exist"})}
    
     await _collectionUsers.add({
            email : req.body.email,
            password: await bcrypt.hash(req.body.password, 12),
            type: "Customer",
            street: "none",
           }).then((data) => {
               console.log( data.id);
               return data.id;
           }).catch(er => console.log(er));          
                res.setHeader('Content-Type', 'application/json');
                return res.status(200).send({ status: "ok", message: "User Created"});
            
})


const methodPost = ( request:any, response:any) => {
    response.set('Access-Control-Allow-Origin','*'); 
    const _dataPost = (request.method != "POST" ?  true : false );
    response.setHeader('Access-Control-Allow-Methods', 'POST');
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")

    if(_dataPost){return response.send({error:true, messageError: "Wrong Method"}); }
}


export const loginUser = functions.https.onRequest( async (req, res) => {
    res.set('Access-Control-Allow-Origin','*'); 
    let user:any;
    const _collectionUsers = db.collection('Users');


   // console.log(JSON.stringify(req.query))
    const _userExist =  await _collectionUsers.where('email', '==', req.body.email).get().then( (snp) => {
        console.log("SNP SIZE: " + snp.size);
        if(snp.empty){
            return true;
        }
           console.log(snp)
            snp.forEach((doc) =>{
            user = {
            id : doc.id,
            password : doc.data().password,
            email : doc.data().email,
	    level: doc.data().type
            }})
    
          return false;
    }).catch((er) => console.log("ERROR LINE 68: ", er));
    console.log("PO USER EXIST");

    if(_userExist){ return res.send({error: true, messageError: "User doesn't exists"})}
    console.log("USER: " +user)
  const comp  = await bcrypt.compare(req.body.password, user.password);
  if(!comp){
  return   res.status(200).send({error: true, messageError: "wrong password"});
  }
  const token = jwt.sign(
    {id: user.id },
    'KEYJWT',
    {
        expiresIn: '30d'
    }
);
const level = (user.level != "Admin" ? 2 : 1);
    res.setHeader('Content-Type', 'application/json');
  return res.status(200).send({ status: "ok", token : token, level: level });

})


const validateUser = async (req:any,res:any, id:string) => {
    const user = db.collection('Users').doc(id);

const isValid = await  user.get().then(doc => {
        if(!doc.exists ){
            return null;
        }else{
           
         return (doc.data()!.type == "Admin" ? true : false);
        }
    }).catch(e => console.log(e))
    
    if(!isValid || isValid == null){
    return    res.status(200).send({message: "No rights!!!"});
    }

    
}


// validateToken and return decoded id from token 
const ValidateToken = (reqeust:any, response: any): Promise<any> => {

return new Promise ((resolve, reject) => {
    const token =  String(reqeust.headers.authorization);
    let decodecToken:any;
    try{
        decodecToken   = jwt.verify(token, 'JWTOKEN');
    }catch (e) {
        console.log(e);
        resolve( null);
    }

    
    resolve( decodecToken.id);

})

}





