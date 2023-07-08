'use strict'

const expect = require('chai').expect
const ConvertHandler = require('../controllers/convertHandler.js')

module.exports = function (app) {
  let convertHandler = new ConvertHandler()
  app.route('/api/convert').get(function (req, res) {
    const initNum = convertHandler.getNum(req.query.input)
    const initUnit = convertHandler.getUnit(req.query.input)
    const returnUnit = convertHandler.getReturnUnit(initUnit)
    const returnNum = convertHandler.convert(initNum, initUnit)
    const initUnitString = convertHandler.spellOutUnit(initUnit)
    const returnUnitString = convertHandler.spellOutUnit(returnUnit)
    const string = convertHandler.getString(initNum, initUnitString, returnNum, returnUnitString)
    // return { initNum: 3.1, initUnit: 'mi', returnNum: 4.98895, returnUnit: 'km', string: '3.1 miles converts to 4.98895 kilometers' }
    res.json({
      initNum,
      initUnit,
      returnNum,
      returnUnit,
      string,
    })
  })
}
