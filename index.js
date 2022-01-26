/**
 * @author Luis Enrique Huh Puc <luisenriquehuhpuc@hotmail.com>
 * @description SERVER CONFIG FILE
 */

/* * * * * * * * * * * *
 *  Import Statements  *
 * * * * * * * * * * * */
const express = require("express");
const path = require("path");
const ResponseFormatter = require("./lib/ResponseFormatter");
const routes = require("./routes");

/* * * * * * * * * **
 * Environment File *
 * * * * * * * * * */
const port = 5100;

/* * * * * **
 *  Routes  *
 * * * * * */
const app = express();
// En caso que se requiere leer un directorio con script compilado de React.
/* app.use(express.static("dist"));  */
app.use(`/api`, routes);
app.use(`/`, (req, res, next) => {
	let message = new ResponseFormatter("Running NodeJS API", 200);
	res.status(message.code).send(message.get());
});

// Para un correcto funcionamiento de las rutas de React.
/* app.get("/*", function (req, res) {
	res.sendFile(path.join(__dirname, "../../dist/index.html"), function (err) {
		if (err) {
			let message;
			if (err.statusCode == 404) {
				message = new ResponseFormatter(
					`Not Found => ${req.url}`,
					404,
					true
				);
			} else {
				message = new ResponseFormatter(
					`Internal Server Error`,
					500,
					true
				);
			}
			res.status(message.code).send(message.get());
		}
	});
}); */

/* * * * * * * * * **
 *  Listening Port  *
 * * * * * * * * * */
app.listen(port, () => {
	console.clear();
	console.log();
	console.info(`Running mode: OFFLINE`);
	console.info(`Listening on port ${port}!`);
});
