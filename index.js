const express = require('express');
// var base64ToImage = require('base64-to-image');
const bodyParser = require('body-parser');
const path = require('path');
// var ba64 = require("ba64")
const multer = require('multer');
const {blogModel} = require('./models/database.js');

const storage=multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },

    filename: (req, file, cb) => {
        console.log(file)
        cb(null, req.body.ID+path.extname(file.originalname))
    }}
)
var upload = multer({storage:storage});



const app = express()

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.set('views', path.join(__dirname, 'views'))


app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');


    // // Set to true if you need the website to include cookies in the requests sent
    // // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.post('/alumni/insert',upload.single('image'), async(req, res) => {
    // console.log(req.body);

    // console.log('hehehe ', req.body) 
    console.log('hehehe ', req.body.desc)
    // ba64.writeImage("myimage", , function (err) {
    //     if (err) throw err;

    //     console.log("Image saved successfully");

    //     // do stuff
    // })
    try
   { const result=await blogModel.insertMany({ID:'sunil',DESC:req.body.desc})

   console.log(result);

}
   
   catch(err)
   {
    console.log(err);
   }


});

//     try
// {
//     // Decoding base-64 image
//     // Source: http://stackoverflow.com/questions/20267939/nodejs-write-base64-image-file
//     function decodeBase64Image(dataString) 
//     {
//       var matches = dataString.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
//       var response = {};

//       if (matches.length !== 3) 
//       {
//         return new Error('Invalid input string');
//       }

//       response.type = matches[1];
//       response.data = new Buffer(matches[2], 'base64');

//       return response;
//     }

//     // Regular expression for image type:
//     // This regular image extracts the "jpeg" from "image/jpeg"
//     var imageTypeRegularExpression      = /\/(.*?)$/;      

//     // Generate random string
//     var crypto                          = require('crypto');
//     var seed                            = crypto.randomBytes(20);
//     var uniqueSHA1String                = crypto
//                                            .createHash('sha1')
//                                             .update(seed)
//                                              .digest('hex');

//     var base64Data = img.data;

//     var imageBuffer                      = decodeBase64Image(base64Data);
//     var userUploadedFeedMessagesLocation = '/views/';

//     var uniqueRandomImageName            = 'image-' + uniqueSHA1String;
//     // This variable is actually an array which has 5 values,
//     // The [1] value is the real image extension
//     var imageTypeDetected                = imageBuffer
//                                             .type
//                                              .match(imageTypeRegularExpression);

//     var userUploadedImagePath            = userUploadedFeedMessagesLocation + 
//                                            uniqueRandomImageName +
//                                            '.' + 
//                                            imageTypeDetected[1];

//     // Save decoded binary image to disk
//     try
//     {
//     require('fs').writeFile(userUploadedImagePath, imageBuffer.data,  
//                             function() 
//                             {
//                               console.log('DEBUG - feed:message: Saved to disk image attached by user:', userUploadedImagePath);
//                             });
//     }
//     catch(error)
//     {
//         console.log('ERROR:', error);
//     }

// }
// catch(error)
// {
//     console.log('ERROR:', error);
// }






app.listen(5000, (req, res) => {
    console.log('listening in ', 5000);
})