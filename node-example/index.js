const express = require('express')

const app = express();

//when user browsers to root return message
app.get('/', (req,res) => {
    res.send('How are you doing?')
});

//listen on port 8080 for requests
app.listen(8080, () => {
    console.log('listening on port 8080');
});