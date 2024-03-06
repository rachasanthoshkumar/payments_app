const express  = require('express');
const {mongoose} = require('mongoose')
const { authMiddleware } = require('../middleware');
const { Account } = require('../db');
const router = express.Router();

router.get('/balance',authMiddleware,async (req,res)=>{
    const account = await Account.findOne({
        userId: req.userId
    })

    res.json({
        balance :account.balance
    })
})


router.post('/transfer',authMiddleware,async (req,res)=>{

    const session = await mongoose.startSession();
    await session.startTransaction();
    const {to,amount} = req.body;
    const account = await Account.findOne({
        userId:req.userId
    })
    if(!account || account.balance<=amount)
    {
        await session.abortTransaction();
        return res.json({
            msg:"insufficient balance"
        })
    }
    const toAccount = await Account.findOne({
        userId:to
    })
    if(!toAccount )
    {
        await session.abortTransaction();
        return res.json({
            msg:"Incorrect Account "
        })
    }

    await Account.updateOne({
        userId:req.userId
    },
    {
        $inc:{
            balance:-amount
        }
    })
    await Account.updateOne({
        userId:to
    },
    {
        $inc:{
            balance:amount
        }
    })
    await session.commitTransaction();
    res.json({
        msg:"transaction successfull"
    })
})
module.exports=router;
