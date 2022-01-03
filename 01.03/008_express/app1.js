const express = require('express')

const app = express();

app.get('/', (req, res, next) => {
        console.log('get으로 요청이 들어왔습니다!');
        res.send('hello world!!');
})

app.listen(8080)