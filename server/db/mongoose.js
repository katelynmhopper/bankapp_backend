const mongoose = require('mongoose'); 

const connectionURL = 'mongodb://127.0.0.1:27017'; 
const databaseName = 'bank-customers';

mongoose.connect(`${connectionURL}/${databaseName}`, {
    useNewUrlParser: true, 
});

