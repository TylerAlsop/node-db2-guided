const express = require("express")

const router = express.Router()

router.get("/", (req, res, next) => {
	res.json({
		message: "Welcome to node-db2-guided.",
	})
})

module.exports = router