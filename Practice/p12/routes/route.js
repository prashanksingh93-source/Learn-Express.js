import express from 'express'
import { homepage } from '../controller/homepage.js';

const app=express.Router();

app.get('/',homepage)
export default app;