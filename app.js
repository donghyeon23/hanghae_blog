const express = require('express');
const connect = require('./schemas')
const app = express();
const port = 3000;

const postRouter = require('./routes/posts')

connect();

app.use((req, res, next) => {
    console.log('Request URL:', req.originalUrl, ' - ', new Date());
    next();
});

// view 템플릿으로 .ejs 파일 사용
app.set('view engine', 'ejs');
// ejs 파일 경로
app.set('views', './views');

app.use(express.json());

app.use("/api", [postRouter]);

app.get('/', (req, res) => {
    res.render('index');
});

app.listen(port, () => {
    console.log(port, '포트로 서버가 열렸습니다!');
});
