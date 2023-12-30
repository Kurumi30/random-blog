const Article = require('../models/article')

class ArticleController {
  async main(req, res) {
  const articles = await Article.find().sort({ createdAt: "desc" })

  res.render("articles/index", { articles })
}

  async newArticle(req, res) {
  res.render("articles/new", { article: new Article() })
}

  async editArticle(req, res) {
  const article = await Article.findById(req.params.id)

  res.render("articles/edit", { article })
}

  async showArticle(req, res) {
  const article = await Article.findOne({ slug: req.params.slug })

  if (article == null) res.redirect("/")

  res.render("articles/show", { article })
}

  async postArticle(req, res, next) {
  req.article = new Article()

  next()
}

  async putArticle(req, res, next) {
  req.article = await Article.findById(req.params.id)

  next()
}

  async deleteArticle(req, res) {
  await Article.findByIdAndDelete(req.params.id)

  res.redirect("/")
}
}

module.exports = ArticleController
