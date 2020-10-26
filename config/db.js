const mongoose = require("mongoose");
 
// Copia la URL del sitio de mongo DB
//const MONGOURI = "mongodb+srv://test:Bjrs160401@cluster0.zmet8.mongodb.net/AWOS?retryWrites=true&w=majority";//<--
const MONGOURI = "mongodb+srv://test:test@cluster0.zmet8.mongodb.net/AWOS?retryWrites=true&w=majority"; 

const InitiateMongoServer = async() => {
    try {
        await mongoose.connect(MONGOURI, {
            useNewUrlParser: true
        });
        console.log("Conectado a la BD !!");
    } catch (e) {
        console.log(e);
        throw e;
    }
};
 
module.exports = InitiateMongoServer;