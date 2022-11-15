const { storageModel } = require("../models")
const PUBLIC_URL = process.env.PUBLIC_URL
//Obtain list
const getItems = async (req, res) => {
    const data = await storageModel.find({})
    res.send({ data })
}

//Obtain specific item
const getItem = (req, res) => {
}

//Create item
const createItem = async (req, res) => {
    const { body, file } = req
    const fileData = {
        filename: file.filename,
        url: `${PUBLIC_URL}/${file.filename}`
    }
    const data = await storageModel.create(fileData)
    res.send({ data })
}

//Update item
const updateItem = (req, res) => { }

//Delete item
const deleteItem = (req, res) => { }

module.exports = { getItems, getItem, createItem, updateItem, deleteItem }