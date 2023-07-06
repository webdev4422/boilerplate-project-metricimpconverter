function ConvertHandler() {
  this.getNum = (input) => {
    let result = input.match(/\d+/)[0]
    return result
  }

  this.getUnit = (input) => {
    let result = input.match(/[A-Za-z]+/)[0].toLowerCase()

    return result
  }

  this.getReturnUnit = (initUnit) => {
    // const galToL = 3.78541, lbsToKg = 0.453592, miToKm = 1.60934
    const units = { gal: 'L', l: 'gal', lbs: 'kg', kg: 'lbs', mi: 'km', km: 'mi' }
    let result
    for (const item in units) {
      if (item == initUnit) {
        result = item
      }
    }
    console.log(result)

    return result
  }

  this.spellOutUnit = (unit) => {
    let result

    return result
  }

  this.convert = (initNum, initUnit) => {
    const galToL = 3.78541
    const lbsToKg = 0.453592
    const miToKm = 1.60934

    // let result = initNum
    // console.log(result)

    return result
  }

  this.getString = (initNum, initUnit, returnNum, returnUnit) => {
    let result

    return result
  }
}

module.exports = ConvertHandler
