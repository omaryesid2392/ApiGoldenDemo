
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
//const path = require('path');
const app = express();

// setting
app.set('port', process.env.PORT || 5000);

//midlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

//listas routers
app.use('/api/productos/', require('./routes/productoRouters'));
app.use('/api/ventas/', require('./routes/ventasRouters'));
app.use('/api/users/', require('./routes/usersRouters'));
app.use('/api/category/', require('./routes/categoryRouters'));
app.use('/api/establecimientos/', require('./routes/establecimientosRouters'));

//static files
//app.use(express.static(path.join(__dirname, 'public')));
module.exports = app;