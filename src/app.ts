import express, {Express, Request, Response} from 'express';

const app: Express = express();
const port: number = 8000;

type Person = {
    name: string;
    age: number;
}

app.get('/', (req: Request, res: Response): void => {
    let response: Person = {name: 'John', age: 25};
    response["name"] = 'success';
    res.json(response);
});

app.listen(port, (): void => {
    console.log(`Listening on port: ${port}`);
});