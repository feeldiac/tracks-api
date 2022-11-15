const multer = require('multer')

//Multer uses storage as a middleware
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const pathStorage = `${__dirname}/../storage`
        cb(null, pathStorage)
    },
    filename: function (req, file, cb) {
        //It will create a file name based on the timestamp
        const extension = file.originalname.split('.').pop()
        const filename = `file-${Date.now()}.${extension}`
        cb(null, filename)
    }
})

const uploadMiddleware = multer({ storage })

module.exports = uploadMiddleware