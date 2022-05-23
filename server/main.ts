import express, {Application, Request, Response} from 'express'
import cors from 'cors'

const app: Application = express();
const PORT = process.env.PORT || 5001;
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, World!');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));