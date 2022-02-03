const { model } = require("mongoose")

let mongoose = require("mongoose")
const Schema = mongoose.Schema

const UserDevice = new Schema({
    user:String,
    deviceIp:String,
    deviceName:String,
    deviceType:String,
    deviceLocation:String
})

module.exports = mongoose.model("devices",UserDevice)