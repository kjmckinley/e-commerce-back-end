// for importing an express connection
const express = require('express');
// for importing a sequelize connection
const sequelize = require('./config/connection');
// to link and import server routes
const routes = require('./routes');

// express function
const app = express();
// Port local host  address
const PORT =  3001;

// server will use these packages and routes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync the sequelize models to the user database, then turn the server on
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
    });
});
