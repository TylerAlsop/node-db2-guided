const express = require("express")
const db =  require("../data/config")

const router = express.Router()


/////// This handles the route http://localhost:5555/fruits ///////


/////////////// GET ///////////////

router.get("/", async (req, res, next) => {
	try {
		const fruits = await db("fruits")
		
		res.json(fruits)
	} catch(err) {
		next(err)
	}
})

// GET fruit by ID //

router.get("/:id", async (req, res, next) => {
	try {
		const { id } = req.params
		const fruit = await db("fruits").where({ id }).first()
		
		res.json(fruit)
	} catch(err) {
		next(err)
	}
})


/////////////// POST ///////////////

router.post("/", async (req, res, next) => {
	try {
		const fruitData = req.body
		const [id] = await db("fruits").insert(fruitData)
		const newFruit = await db("fruits").where({ id })

		res.status(201).json(newFruit)
	} catch(err) {
		next(err)
	}
})

module.exports = router