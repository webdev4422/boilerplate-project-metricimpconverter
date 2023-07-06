'use strict'

const expect = require('chai').expect
const ConvertHandler = require('../controllers/convertHandler.js')

module.exports = function (app) {
  let convertHandler = new ConvertHandler()
  app.route('/api/convert').get(function (req, res) {
    const initNum = convertHandler.getNum(req.query.input)
    const initUnit = convertHandler.getUnit(req.query.input)
    const returnUnit = convertHandler.getReturnUnit(initUnit)
    // const returnNum = convertHandler.spellOutUnit(initNum, initUnit)
    const returnNum = convertHandler.convert(initNum, initUnit)

    // const result = convertHandler.getReturnUnit(initNum, initUnit, returnNum, returnUnit)
    // console.log(result)
    res.json('ok')
  })
}
