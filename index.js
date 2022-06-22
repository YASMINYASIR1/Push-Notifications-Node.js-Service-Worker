const express= require('express');
const webpush = require('web-push');
const path= require('path');
const bodyParser = require('body-parser');

const app= express();

// set static path 
app.use(express.static(path.join(__dirname , "client")));

app.use(bodyParser.json());

const publicVapidKey='BLnuaJB7VkY9nXaHzbU8BhYb0UNeYJYweCKJIiny1Vv-Tkhd1ysTS1JG2d-J6zE8pQF5kAo0kclNDaqEhEnGkvs';
const privateVapidKey='dE77L63CFXuzusNAdLJ5kB8yJKw_kgneraK9830WnGQ';


webpush.setVapidDetails('mailto:yasmin@gmail.com',publicVapidKey,privateVapidKey);

//subcribe Route

app.post('/subscribe', (req,res)=>{
    const subscription=req.body;

    //send 201 - resource created
    res.status(201).json({});

    //create payload
    const payload=JSON.stringify({title :'only for test'});
    
    //pass object into sendNotification
    webpush.sendNotification(subscription ,payload).catch(err=>console.error(err));
});
const port=5000;
app.listen(port,()=> console.log(`Server started on port ${port}`))