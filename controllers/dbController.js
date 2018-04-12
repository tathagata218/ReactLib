const mongoose = require('mongoose');
const bookDB = require('../models/bookDB');
const dvdDB = require('../models/dvdDB');
const userDB = require('../models/userDB');


module.exports  = {
//----------------------------------------------------These are all the get methods-----------------------------------------------    

//----------------------------------------------------These are all the methods for get User, Book, DVD data back to client-----------------------------------------------

    addBook : (req,res,next) => {
        console.log(req.body)
        let userID = req.body.userID
        let bookID = req.body.book._id
        bookDB.findByIdAndUpdate({_id : bookID}, {$set: {rented : true}}).then((bookdata)=>{
            console.log(bookdata);
            userDB.findByIdAndUpdate({_id : userID},{$push :{booksCheckedout : bookdata}}).then((userdata)=>{
                console.log(userdata.booksCheckedout)
                res.json({message: "err"}).status(200).end()
            })
        })

        
    },

    addDvd : (req,res,next) =>{
        console.log(req.body)
        let userID = req.body.userID
        let dvdID = req.bodu.book._id
        dvdDB.findByIdAndUpdate({_id : dvdID}, {$set: {rented : true}}).then((dvddata)=>{
            console.log(dvddata);
            userDB.findByIdAndUpdate({_id : userID},{$push :{booksCheckedout : dvddata}}).then((userdata)=>{
                console.log(userdata.dvdCheckedOut)
                res.json({message: "err"}).status(200).end()
            })
        })
        userDB.findById()
        res.status(200).end()
        
    },


    getAllBooks :  (req,res,next) => {


         bookDB.find({}).then((data)=>{res.send(data);}).catch((err)=>{
             console.log(err);
             
         })

        
        
    },

    getAllDvd :  (req,res,next) => {


         dvdDB.find({}).then((data)=>{res.send(data);}).catch((err)=>{
            console.log(err);
            
        })

      
        
    }
}