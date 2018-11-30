const express = require('express')
const app = express()

app.get('/calc/:expression', (req, res) => {
  if (/([0-9/*\-+()])*/.exec(req.params['expression'])[0] !== req.params['expression']) {
    res.status(400)
    return res.json({
      error: 'Only simple expressions are allowed'
    })
  }

  try {
    // eslint-disable-next-line no-eval
    const result = eval(decodeURIComponent(req.params['expression']))
    res.json({ result })
  } catch (e) {
    res.status(400)
    res.json({ error: 'The calculation needs to be calculable' })
  }
})

module.exports = app
