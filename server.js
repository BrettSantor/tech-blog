//! require dependencies
const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
//! set up express app
const app = express();
const PORT = process.env.PORT || 3001;
const sequelize = require('./config/connection');
//!set up handlebars
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
//! use middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(router);
app.use(express.static(path.join(_dirname, 'public')));
app.use(require('./controllers/routesforhandlebars'));
//! server ears
sequelize.sync({ force:false}).then(() => {
    app.listen(PORT, () => console.log(`I hear you at ${PORT}...`))
});
