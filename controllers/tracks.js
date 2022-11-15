const { tracksModel } = require("../models")

//Obtain list
const getItems = async (req, res) => {
    const data = await tracksModel.find({})
    res.send({ data })
}

//Obtain specific item
const getItem = (req, res) => {
}

//Create item
const createItem = async (req, res) => {
    const { body } = req
    const data = await tracksModel.create(body)
    res.send({ data })
}

//Update item
const updateItem = (req, res) => { }

//Delete item
const deleteItem = (req, res) => { }

module.exports = { getItems, getItem, createItem, updateItem, deleteItem }