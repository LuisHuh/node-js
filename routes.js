/**
 * @author Luis Enrique Huh Puc <lhuh@palaceresorts.com>
 * @description ROUTES OFFLINE MODE
 */

/* * * * * * * * * * *
 * Import Statements *
 * * * * * * * * * * */
const express = require("express");
const JsonReader = require("./lib/JsonReader");

const router = express.Router();
router.use(express.json());

const mergePath = (...path) => path.join("/");

/**
 *
 * @param {Response} response
 * @param {string} filename Nombre del archivo json
 */
const readingJson = (response, filename) => {
	new JsonReader(mergePath(__dirname, `data/${filename}.json`), (error, data) => {
        if (!error)
		    return response.send(data);
        
        return response.status(500).send(data);
	});
};

// Rutas
router.get("/default", (req, res) => readingJson(res, "default"));
router.post("/default", (req, res) => readingJson(res, "default"));



/* * * * * * * * * * * * * *
 * Export Module Middleware *
 * * * * * * * * * * * * * **/
module.exports = router;
