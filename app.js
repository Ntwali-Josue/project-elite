import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.json()); 

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.status(200).json({
    status: 200,
    message: "Pharmacy locator",
  });
});

const port = process.env.PORT || 4500;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

export default app;