exports.saveArticleAndRedirect = (path) => {
  return async (req, res) => {
    let article = req.article

    article.title = req.body.title
    article.description = req.body.description
    article.markdown = req.body.markdown
    article.createdAt = Date.now()

    try {
      article = await article.save()

      res.redirect(`/articles/${article.slug}`)
    } catch (err) {
      res.render(`articles/${path}`, { article })
    }
  }
}