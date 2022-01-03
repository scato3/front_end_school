const express = require('express');

const app = express();
app.use(express.json());

app.post('/', (req, res, next) => {
    console.log('post으로 요청이 들어왔습니다!');
    console.log(req.body);
    res.send('hello world!!');
});
app.listen(8080);