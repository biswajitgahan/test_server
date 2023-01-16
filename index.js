import express from 'express';
import cors from 'cors';

const app = express();
const port = 5000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/say", (req, res) => {
  return res.status(200).send("Hello BG!");
})

app.listen(port, () => {
  console.log('server connected.');
});