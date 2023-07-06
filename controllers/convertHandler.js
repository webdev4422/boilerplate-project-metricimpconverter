function ConvertHandler() {
  this.getNum = (input) => {
    let result = input.match(/\d+/)[0]
    return parseInt(result)
    // 'invalid number'
  }

  this.getUnit = (input) => {
    const units = ['gal', 'l', 'lbs', 'kg', 'mi', 'km']
    let result = input.match(/[A-Za-z]+/)[0].toLowerCase()
    for (let i = 0; i < units.length; i++) {
      if (result == units[i]) {
        return result
      }
    }
    return 'invalid unit'
  }

  this.getReturnUnit = (initUnit) => {
    const unitsOpposite = { gal: 'L', l: 'gal', lbs: 'kg', kg: 'lbs', mi: 'km', km: 'mi' }
    let result
    for (const item in unitsOpposite) {
      if (item == initUnit) {
        result = unitsOpposite[item] // returnUnit
      }
    }
    return result
  }

  this.spellOutUnit = (unit) => {
    let result
    // 'invalid number and unit'
    return result
  }

  this.convert = (initNum, initUnit) => {
    const unitsValues = {
      gal: 3.78541,
      l: 0.264172176857989,
      lbs: 0.453592,
      kg: 2.204624420183777,
      mi: 1.60934,
      km: 0.6213727366498068,
    }
    const galToL = 3.78541
    const lbsToKg = 0.453592
    const miToKm = 1.60934
    let result

    for (let item in unitsValues) {
      if (item == initUnit) {
        result = initNum * unitsValues[initUnit]
      }
    }
    return result.toFixed(5) // returnNum
  }

  this.getString = (initNum, initUnit, returnNum, returnUnit) => {
    let result

    return result
  }
}

module.exports = ConvertHandler
