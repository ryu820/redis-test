const express = require('express')
const router = express.Router()
const dotenv = require('dotenv')
const redis = require('redis');
dotenv.config()
const env = process.env;

const redisClient = redis.createClient({ 
    legacyMode: true 
})
redisClient.on('connect', () => {
    console.info('Redis Connect~')
})
redisClient.on('error', () => {
    console.error('Redis Connect Error', error)
})
redisClient.connect().then()
const redisCli = redisClient.v4

router.get("/health", (req, res) => {
    res.status(200).json("health Check")
})




module.exports = router;