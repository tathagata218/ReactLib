import React from 'react'
import axios from 'axios'

export default {
    getAllBooksAdmin : function (){
        return axios.get('/allDvds').catch((err)=>console.log(err));
    },

    getAlldvdAdmin : function (){
        return axios.get('/allBooks').catch((err)=>console.log(err));
    },

    updateBook : function () { 

     },
     
    updateDvd : function () {
        
    }

}