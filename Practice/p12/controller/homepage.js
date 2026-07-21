import { homeData } from '../models/homeData';

export const homepage=(req,res)=>{
    let data=homeData()
    res.render('home',data)
}