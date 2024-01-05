const express = require('express')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const articleRouter = require('./routes/articles')
const ArticleController = require('./controllers/articles')

const app = express()
const port = process.env.PORT || 3000
const controller = new ArticleController()

mongoose.connect(process.env.MONGODB_URL)

app.set("view engine", "ejs")

app.use(express.urlencoded({ extended: false }))
app.use(methodOverride("_method"))

app.get("/", controller.main)

app.use("/articles", articleRouter)

app.listen(port, () => console.log(`http://localhost:${port}`))
