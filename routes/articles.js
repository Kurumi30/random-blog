const { Router } = require('express')
const ArticleController = require('../controllers/articles')
const { saveArticleAndRedirect } = require('../middlewares')

const router = Router()
const controller = new ArticleController()

router.get("/new", controller.newArticle)

router.get("/edit/:id", controller.editArticle)

router.get("/:slug", controller.showArticle)

router.post("/", controller.postArticle, saveArticleAndRedirect("new"))

router.put("/:id", controller.putArticle, saveArticleAndRedirect("edit"))

router.delete("/:id", controller.deleteArticle)

module.exports = router
