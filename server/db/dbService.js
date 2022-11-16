// const ENVIROMENT = 'dev';
// const ENVIROMENT = 'production';

const connectDB = (ENVIROMENT)=>{
    if(ENVIROMENT === 'dev') require('./mongoDB/connectToLocal');
    if(ENVIROMENT === 'production') require('./mongoDB/connectToAtlas');
}

module.exports = connectDB;