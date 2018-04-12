import React from 'react'
import axios from 'axios'


export default {

    getAllDvd : function () {
        return axios.get('/allDvds').catch((err)=>console.log(err));
    },
    getAllBooks : function () {
        return axios.get('/allBooks').catch((err)=>console.log(err));
    },

    saveBook : function (data) { 
        return axios.post('/addBook',data).catch(err=>console.log(err));

     },

     saveDvd : function (data)   {
        return axios.post('/addDvd',data).catch(err=>console.log(err));
     }
}

