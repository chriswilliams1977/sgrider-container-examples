const express = require('express');
const redis = require('redis');
const process = require('process');

const app = express();
//JS client library to connect to redis
const client = redis.createClient({
    host: 'redis-server',
    port: 6379
});
//Set redis var to default
client.set('visits', 0)

//When users browses root, visits var from redis and display
//Then increment
app.get('/', (req,res) => {
    process.exit(0);
    client.get('visits', (err, visits) => {
        res.send('Number of visits is ' + visits);
        client.set('visits', parseInt(visits) + 1)
    });
});

app.listen(8081, () => {
    console.log('Listening on port 8081');
})