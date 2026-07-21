import express from 'express'
import { homepage } from '../controller/homepage';

const app=express.Router();

app.get('/',homepage)
export default app;