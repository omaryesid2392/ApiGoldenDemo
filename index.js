
const firebase = require('./connections');
const app = require('./app');
app.listen(app.get('port'),()=> {
	console.log(process.env.npm_package_name + " iniciado en puerto "+ app.get('port'))
});

