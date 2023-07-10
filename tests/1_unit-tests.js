const chai = require('chai')
let assert = chai.assert
const ConvertHandler = require('../controllers/convertHandler.js')
let convertHandler = new ConvertHandler()

let expect = require('chai').expect

/*
TODO


convertHandler should correctly convert gal to L.
convertHandler should correctly convert L to gal.
convertHandler should correctly convert mi to km.
convertHandler should correctly convert km to mi.
convertHandler should correctly convert lbs to kg.
convertHandler should correctly convert kg to lbs.
*/
suite('Unit Tests', () => {
  suite('Numbers', () => {
    test('#1 convertHandler should correctly read a whole number input.', () => {
      expect(convertHandler.getNum('1gal')).to.be.a('number')
    })
    test('#2 convertHandler should correctly read a decimal number input.', () => {
      expect(convertHandler.getNum('1.5gal')).to.be.equal(1.5)
    })
    test('#3 convertHandler should correctly read a fractional input.', () => {
      expect(convertHandler.getNum('1/2gal')).to.be.equal(0.5)
    })
    test('#4 convertHandler should correctly read a fractional input with a decimal.', () => {
      expect(convertHandler.getNum('1.5/2gal')).to.be.equal(0.75)
    })
    test('#5 convertHandler should correctly return an error on a double-fraction (i.e. 3/2/3).', () => {
      expect(convertHandler.getNum('3/2/3gal')).to.be.equal(null)
    })
    test('#6 convertHandler should correctly default to a numerical input of 1 when no numerical input is provided.', () => {
      expect(convertHandler.getNum('gal')).to.be.equal(1)
    })
  })
  /*--------------------------------------------------------------------------*/
  suite('Units', () => {
    test('#7 convertHandler should correctly read each valid input unit.', () => {
      expect(convertHandler.getUnit('1gal')).to.be.equal('gal')
    })
    test('#8 convertHandler should correctly return an error for an invalid input unit.', () => {
      expect(convertHandler.getUnit('1gam')).to.be.equal(null)
    })
    test('#9 convertHandler should return the correct return unit for each valid input unit.', () => {
      // expect(convertHandler.getUnit('1gal')).to.be.equal('gal')
    })
    test('#10 convertHandler should correctly return the spelled-out string unit for each valid input unit.', () => {
      // expect(convertHandler.getUnit('1gal')).to.be.equal('gal')
    })
  })
})
