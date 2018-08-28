let items = [];

module.exports = {
  read: (req, res) => {
    res.status(200).send(items);
  },

  create: (req, res) => {
    const { input, number, price, type } = req.body;
    items.push({input, number, price, type})
    res.status(200).send(items);
  },

  delete: (req, res) => {
    const {index} = req.params
    items.splice(index,1)
    res.status(200).send(items)

  },

  update: (res, req) => {
    const { newMessage, index } = req.body
        items[index] = newMessage
        console.log(items)
        res.status(200).send(items)
  }
}
