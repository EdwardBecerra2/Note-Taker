const router = require('express').Router();

const notesRouter = require('./notesRoute.js')


router.use(notesRouter)

module.exports = router