module.exports = function (req, res, next) {

  if (req.session.userId) return next()
  res.json({ message: "User not found!" })
}