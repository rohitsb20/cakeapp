import express from 'express';
import dotenv from 'dotenv';

const port = process.env.PORT || 5000;
const app = express();
dotenv.config();


app.get('/', (req, res) => {
    res.send('Server is ready');
});



app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

