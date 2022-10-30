
const mongoose = require('mongoose');

main().catch(err => console.log(err));


 async function main() {
   connect = await mongoose.connect('mongodb://localhost:27017/csco');
  console.log('connected to db')
  
  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}

const blogSchema=new mongoose.Schema(
    {
        ID:
        {
            unique:true,
            required:true,
            type:String,

        },
        DESC:
        {
            unique:true,
            required:true,
            type:String
        }
    })

    const blogModel=mongoose.model('blogModel',blogSchema)

    module.exports={ blogModel:blogModel}