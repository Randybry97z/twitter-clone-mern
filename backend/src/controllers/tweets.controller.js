const tweetsController = {}

tweetsController.index = (req, res) => res.json({ message: 'GET Request' })

tweetsController.create = (req, res) => res.json({ message: 'POST Request' })

tweetsController.getTweet = (req, res) => res.json({ message: 'GET ONE' })

tweetsController.update = (req, res) => res.json({ message: 'Tweet updated' })

tweetsController.deleteTweet = (req, res) => res.json({ message: 'Tweet deleted' })

module.exports = tweetsController