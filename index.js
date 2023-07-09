import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import * as dotenv from 'dotenv';

dotenv.config();

const app = express();
app.set('port', process.env.PORT || 4000);
app.listen(app.get('port'),()=>
{
    console.log('Puerto: '+ app.get('port'));
});

//Agregado de MiddleWares
app.use(cors()); //Conexiones remotas
app.use(express.json()); //Interpretar formato json
app.use(express.urlencoded({extended: true}));//permite en el objeto request los strings y los arrays 
app.use(morgan());