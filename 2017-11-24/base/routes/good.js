const express=require('express');
const router=express.Router();
const goodJson = require('../data/gooddata.js');

router.get('/',(req,res)=>{
    res.end('this is good router');
});

router.get('/list', (req, res) => {
    res.end(goodJson);
})








module.exports=router;