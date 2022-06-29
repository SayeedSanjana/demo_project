import mongoose from 'mongoose';

export const mongoConnect = () => {
    mongoose.connect(process.env.DB_URI,
        {
            useNewUrlParser:true, 
            useUnifiedTopology:true,
        })
        .then(()=> console.log(`${new Date().toISOString()} [info] Connected to DB @ ${process.env.DB_URI}`))
        .catch((e) => {
        console.log(e);
        setTimeout(mongoConnect, 5000);
    });
};