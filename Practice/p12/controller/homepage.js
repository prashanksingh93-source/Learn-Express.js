import { homeData } from '../models/homeData.js';

export const homepage=(req,res)=>{
    let data=homeData()
    res.render('home',data)
}