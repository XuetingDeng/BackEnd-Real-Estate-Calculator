const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const userRoutes = require('../routes/userRoutes');
const propertyRoutes = require('../routes/propertyRoutes');
const reportRoutes = require('../routes/reportRoutes');

// const corsOptions = {
//   origin: 'http://localhost:3000',
//   optionsSuccessStatus: 200
// };

// app.use(cors(corsOptions));

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());


app.use('/api', userRoutes);
app.use('/api', propertyRoutes);
app.use('/api', reportRoutes);


const port = process.env.PORT || 5001;
app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on http://0.0.0.0:${port}`);
});
// sequelize.sync()
//   .then(() => {
//     console.log('Database synchronized');
//     const port = process.env.PORT || 5000;
//     app.listen(port, '0.0.0.0', () => {
//       console.log(`Server is running on http://0.0.0.0:${port}`);
//     });
//   })
//   .catch((err) => {
//     console.error('Failed to synchronize database:', err);
//   });
