const chaiHttp = require('chai-http')
const chai = require('chai')
let assert = chai.assert
const server = require('../server')
let expect = require('chai').expect
chai.use(chaiHttp)

suite('Functional Tests', () => {
  suite('Integration tests with chai-http', () => {
    test('#1 Convert a valid input such as 10L: GET request to /api/convert.', (done) => {
      chai
        .request(server)
        .keepOpen()
        .get('/api/convert')
        .query({ input: '10L' }) // /api/convert/?input=10L
        .end((err, res) => {
          expect(err).to.be.null
          expect(res).to.have.status(200)
          done()
        })
    })
    test('#2 Convert an invalid input such as 32g: GET request to /api/convert.', (done) => {
      chai
        .request(server)
        .keepOpen()
        .get('/api/convert')
        .query({ input: '32g' })
        .end((err, res) => {
          expect(err).to.be.null
          expect(res.text).to.be.equal('"invalid unit"')
          done()
        })
    })
    test('#3 Convert an invalid number such as 3/7.2/4kg: GET request to /api/convert.', (done) => {
      chai
        .request(server)
        .keepOpen()
        .get('/api/convert')
        .query({ input: '3/7.2/4kg' })
        .end((err, res) => {
          expect(err).to.be.null
          expect(res.text).to.be.equal('"invalid number"')
          done()
        })
    })
    // test('#4 Convert an invalid number AND unit such as 3/7.2/4kilomegagram: GET request to /api/convert.', (done) => {
    //   // expect(convertHandler.getReturnUnit('km')).to.be.equal('mi')
    // })
    // test('#5 Convert with no number such as kg: GET request to /api/convert.', (done) => {
    //   // expect(convertHandler.getReturnUnit('lbs')).to.be.equal('kg')
    // })
  })
})
