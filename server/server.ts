import { Express, Request, Response } from 'express';
const express = require('express')
const cors= require("cors")
import {PrismaClient, Prisma} from '@prisma/client';
require("dotenv").config()

const prisma = new PrismaClient();

const app: Express = express();

app.use(cors());
app.use(express.json());

//get data of all restaurants
app.get("/api/v1/restaurants", async (req: Request, res: Response) => {
    try {
        const restaurants:{
            id: any,
            name: string,
            location: string,
            price_range: number
        }[] = await prisma.restaurants.findMany();
        let obj;
        for (obj of restaurants){
            obj.id = Number(obj.id)
        }
        res.status(200).json({
            'status': "success",
            'restaurants': restaurants,
        })
    } catch (error) {
    }
        
})

//get data of single restaurant
app.get("/api/v1/restaurants/:restaurant_id", async (req: Request, res: Response) => {
    
    try {
        const restaurant:{
            id: any,
            name: string,
            location: string,
            price_range: number
        }|null = await prisma.restaurants.findUnique({
            where:{
                id: BigInt(req.params.restaurant_id),
            },
        })
        if(restaurant == null){
            throw "non-existent";
        }else{
            restaurant.id = Number(restaurant.id)
        }
        res.status(200).json({
            'status': 'success',
            'restaurant': restaurant,
        })
    } catch (error) {
        res.status(400).json({
            'status': 'failure',
            'error': error
        })
    }
})

//create a restaurant
app.post("/api/v1/restaurants", async (req: Request, res: Response) => {
    try {
        const result:{
            id: any,
            name: string,
            location: string,
            price_range: number
        } = await prisma.restaurants.create({
            data: {
                name: req.body.name,
                location: req.body.location,
                price_range: req.body.price_range
            },
        })
        result.id = Number(result.id);
        
        res.status(200).json({
            'status': 'success',
            'data': result
        })
    } catch (error) {
        res.status(400).json({
            'status': 'failure',
            'data': error
        })
    }
})

//Update the restaurant data
app.put("/api/v1/restaurants/:restaurant_id", async (req: Request, res: Response) => {
    try {
        const result:{
            id: any,
            name: string,
            location: string,
            price_range: number
        } = await prisma.restaurants.update({
            data: {
                name: req.body.name,
                location: req.body.location,
                price_range: req.body.price_range
            },
            where: {
                id: BigInt(req.params.restaurant_id)
            }
        })

        result.id = Number(result.id)
        res.status(200).json({
            'status': 'success',
            'data': result
        })
    } catch (error) {
        res.status(400).json({
            'status': 'failure',
            'data': error
        })
    }
})

//Delete the restaurant data
app.delete("/api/v1/restaurants/:restaurant_id", async (req: Request, res: Response) => {
    try {
        const result = await prisma.restaurants.delete({
            where: {
                id: Number(req.params.restaurant_id)
            }
        })
        res.status(200).json({
            'status': 'success',
        })
    } catch (error) {
        res.status(400).json({
            'status': 'failure',
            'data': error
        })
    }
})


const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`server is up and running at port ${port}`)
})