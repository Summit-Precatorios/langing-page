import express from 'express';
import path from 'path';

const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(4001, () => console.log('Server is running at 4001'));