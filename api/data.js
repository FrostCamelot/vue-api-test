module.exports = async (req, res) => {
  setTimeout(() => {
    const data = [
      { one: 1 },
      { two: 2 },
      { three: 3 }
    ]

    res.json(data)
  }, 1000)
}
