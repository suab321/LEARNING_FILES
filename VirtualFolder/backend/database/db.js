const mongoose = require('mongoose');
const multer = require('multer');
const Grid = require('gridfs-stream');
const GridStorage = require('multer-gridfs-storage');
mongoose.connect("mongodb://127.0.0.1/folderStructure");
mongoose.Promise = global.Promise;

const router = require('express').Router();

let gfs;
const connection = mongoose.connection.on("once", () => {
    gfs = Grid(connection.db, mongoose.mongo);
})

const storage = new GridStorage({
    url: "mongodb://127.0.0.1/folderStructure",
    file: (req, file) => {
        const fileInfo = {
            filename: file.originalname
        }
    }
})
const upload = multer({ storage }).single('file');

const folderSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    Contents: [{
        name: String,
        path: String,
        isFile: Number,
        filename: String,
        parentName: String
    }]
});

const filesSchema = new mongoose.Schema({
    name: String,
    data: Buffer,
    path: String
});



const fileModel = mongoose.model('Documents', filesSchema)
const folderModel = mongoose.model('Folder', folderSchema);



module.exports = {
    streamRoute: router,
    folderModel,
    fileModel
}