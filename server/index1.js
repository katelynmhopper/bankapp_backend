const express = require("express");
const cors = require("cors");
const app = express(); 
const userRouter = require("./routes/user-route");
require('./db/mongoose')
const port = process.env.PORT || 7000; 
const authRouter = require('./routes/auth-routes');
const cookieParser = require("cookie-parser");

// //used to serve static files from public directory
// app.use(express.static('public')); 
// //firebase route
// app.get('/open', (req, res) => res.send('Open Route!'))

app.use(cookieParser());

app.use(cors());

app.use(express.json()); 

app.use("/users", userRouter);

app.use('/auth', authRouter);

app.listen(port, () => console.log(`Server running on port ${port}`)) 
//firebase route
// app.get('/auth1', function(req, res){
//     // read token from header
//     const idToken = req.headers.authorization
//     console.log('header:', idToken);

//     // verify token 
//     admin.auth().verifyIdToken(idToken)
//         .then(function(decodedToken){
//             console.log('decodedToken:', decodedToken); 
//             res.send('Authentication Success!!!!'); 
//         }).catch(function(error) {
//             console.log('error:', error); 
//             res.send('Authintication has failed');
//         });



