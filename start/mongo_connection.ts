// import Env from '@ioc:Adonis/Core/Env'
// import mongoose from "mongoose";

// async function connectToMongoDB() {
//   try {
//     const uri = Env.get('MONGODB_CONNECTION_URI');
//     await mongoose.connect(uri, {
//       // useNewUrlParser: true,
//       // useUnifiedTopology: true,
//     });

//     console.log('MongoDB connected!');
//   } catch (error) {
//     console.error('Error connecting to MongoDB:', error);
//   }
// }

// connectToMongoDB();

// // const uri = Env.get('MONGODB_CONNECTION_URI');
// // mongoose.connect(uri, {
// //   // useNewUrlParser: true,
// //   // useUnifiedTopology: true,
// // });

// // mongoose.connection.on('connected', () => {
// //   console.log('MongoDB database connection established successfully!');
// // });
// // mongoose.connection.on('error', (err) => {
// //   console.error('Error connecting to MongoDB:', err);
// // });