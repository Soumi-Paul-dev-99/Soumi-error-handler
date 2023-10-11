const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModels");
// Get all contacts
// route get /api/contacts
// access public

const getContact = asyncHandler(async(req,res)=>{
    const contacts =await Contact.findById(req);
    res.status(200).json({message:"get  contacts", contacts})
});

// create  new contacts
// route POST /api/contacts
// access public

const getAllContact =asyncHandler(async (req,res)=>{
    res.status(200).json({message:"get all contacts"})
});

// create  new contacts
// route POST /api/contacts
// access public

const createContact = asyncHandler(async(req,res)=>{
    console.log("the req body is :", req.body);
    const {name,email,phone} = req.body;
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All fields are required")
    }
    const contact = await Contact.create({
        name,
        email,
        phone
    })
    res.status(200).json(contact)
});
// create  new contacts
// route POST /api/contacts
// access public

const updateContact = asyncHandler(async(req,res)=>{
    res.status(200).json({message:"update contacts"})
});

// create  new contacts
// route POST /api/contacts
// access public

const deleteContact = asyncHandler(async(req,res)=>{
    res.status(200).json({message:"delete contacts"})
});

module.exports = { getContact,createContact,updateContact,deleteContact, getAllContact }