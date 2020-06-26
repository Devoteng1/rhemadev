const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const ProfileSchema = new Schema({
   user: {
       type: Schema.Types.ObjectId,
       ref: 'users'
   },
   handle: {
       type: String,
       required: true,
       max: 40

   },
   supervisor: {
       type: String,
   },
   specialization: {
       type: String,
   },
   department: {
       type: String,
   },
   telephone: {
       type: Number,
   },
   skills: {
       type: [String],
       required: true
   },
   status: {
       type: String,
       required: true
   },
   location:{
       type: String,
   },
   residentialAddress: {
       type: String,
   },
   bio: {
       type :String
   },
   githubusername: {
       type: String
   },
   experience:[
       {
           title: {
               type: String,
             
           },
           company: {
               type:String,
              
           },
           location: {
               type:String
           },
           from:{
               type: Date,
             
           },
           to: {
               type:Date
           },
           current: {
               type: Boolean,
               default: false
           },
           description: {
               type: String,
           }  
       }
   ],
   education:[
    {
        school: {
            type: String,
            required: true
        },
        degree: {
            type:String,
            required:true
        },
        fieldOfStudy: {
            type:String,
            required: true
        },
        from:{
            type: Date,
            required: true
        },
        to: {
            type:Date
        },
        current: {
            type: Boolean,
            default: false
        },
        description: {
            type: String,
        
        }
    }
],
social: {
    youtube:{
        type: String
    },
    twitter:{
        type: String
    },
    facebook:{
        type: String
    },
    instagram:{
        type: String
    },
    linkedin:{
        type: String
    }
},
date: {
    type:Date,
    default: Date.now
}
    
})


module.exports = Profile = mongoose.model('profile', ProfileSchema);