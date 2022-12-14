const express = require("express");
const router = express.Router();
const client = require("./database");

/* Add data to postgres*/
router.post("/register",async (req,res)=>{
    try {
        console.log(req.body);
        const {name,email,phone,age,batch,month} = req.body;
        const query = `INSERT INTO member(phone,email,name,age,batch,month) values('${phone}','${email}','${name}',${age},'${batch}','${month}')`;
        const data = await client.query(query);
        console.log(data);
        res.status(200).json(data);
    } catch (error) {
        console.log(error)
        res.status(400).send();
    }
})

module.exports = router;