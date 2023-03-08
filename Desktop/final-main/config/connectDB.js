const mongoose = require("mongoose");

const connectDB = async () => {
  // try {
  //   await mongoose.connect("mongodb+srv://issam-touaibia:issam-touaibia@cluster0.bfjpj6n.mongodb.net/?retryWrites=true&w=majority",{
  //     useNewUrlParser: true,
  //     useUnifiedTopology: true,
  //     console.log("database connected ...")
  //   });
    
  // } catch (error) {
  //   console.log(error);
  // }
  mongoose.connect("mongodb+srv://issam:issam@cluster0.nhe98hi.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(res => console.log("dataBase Connected "))
  .catch((err) => console.log(err))







};
module.exports = connectDB
