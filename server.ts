import express from 'express';

const port = 3333;

const app = express();

app.use(express.json())

app.listen(port, () => console.log(`server is running on port ${port}`))
