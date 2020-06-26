const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const ActivitySchema = new Schema({
   user: {
       type: Schema.Types.ObjectId,
       ref: 'users'
   },
   date: {
       type: Date,
       default: Date.now,
   },
   clientName: {
       type: String,
       required: true
   },
   jobReference: {
    type: String,
   },
   starttime: {
       type: Date,
   },
   endtime: {
       type: Date,
   },
   billableHours: {
       type: Number,
   },
   rate: {
       type: Number,
   },
   clientCharge: {
    type: Number,
   },
   jobStatus: {
       type: String    
   },
   ContactName:{
       type: String,
   },
   telephone: {
       type: String,
   },
   email: {
       type :String
   },
   consultantName: {
       type: String
   },
   clientRemarks: {
    type: String
   },
   comment: [
       {
           user: {
               type: Schema.Types.ObjectId,
               ref: 'users'
           },
           text: {
               type: String,
               required: true
           },
           name: {
               type: String
           },
           avator: {
               type: String
           },
           date: {
               type: Date,
               default: Date.now
           }
       }
   ]
})


module.exports = Activity = mongoose.model('activity', ActivitySchema);