function ConvertHandler() {
  this.getNum = (input) => {
    let regex =
      /\d+\.\d+\/\d+\.\d+\w|\d+\.\d+\/\d+\w|\d+\/\d+\.\d+\w|^\d+\.\d+\w|^\d+\/\d+\w|^\d+\w/ // Handle proper regex match
    let result = input.match(regex)

    if (result == null && input.match(/^[^A-Za-z]/)) {
      return result // null 'invalid number'
    } else if (input.match(/^[A-Za-z]/)) {
      result = 1
      return +result // 1 unit
    } else {
      result = result[0].slice(0, -1)
      if (result.match(/\//) == '/') {
        d1 = result.match(/\d+\.\d+|\d+/)[0]
        d2 = result.match(/\/\d+\.\d+|\/\d+/)[0].slice(1)
        result = +d1 / +d2
      }
      return +result // initNum
    }
  }

  this.getUnit = (input) => {
    const units = ['gal', 'l', 'lbs', 'kg', 'mi', 'km']
    let result = input.match(/[A-Za-z]+/)

    if (!result) return result // 'invalid unit'
    result = result[0].toLowerCase()
    for (let i = 0; i < units.length; i++) {
      if (result == units[i]) {
        if (result == 'l') return result.toUpperCase() // Handle 'L'
        return result // initUnit
      }
    }
  }

  this.getReturnUnit = (initUnit) => {
    const unitsOpposite = { gal: 'L', L: 'gal', lbs: 'kg', kg: 'lbs', mi: 'km', km: 'mi' }
    let result

    for (const item in unitsOpposite) {
      if (item == initUnit) {
        result = unitsOpposite[item]
      }
    }
    return result // returnUnit
  }

  this.spellOutUnit = (unit) => {
    //prettier-ignore
    const unitsSpellOut = { gal: 'gallons', L: 'liters', lbs: 'pounds', kg: 'kilograms', mi: 'miles', km: 'kilometers', }
    let result

    for (const item in unitsSpellOut) {
      if (item == unit) {
        result = unitsSpellOut[item]
      }
    }
    return result // initUnitString, returnUnitString
  }

  this.convert = (initNum, initUnit) => {
    //prettier-ignore
    const unitsValues = { gal: 3.78541, L: 0.264172176857989, lbs: 0.453592, kg: 2.204624420183777, mi: 1.60934, km: 0.6213727366498068, }
    const galToL = 3.78541
    const lbsToKg = 0.453592
    const miToKm = 1.60934
    let result

    for (let item in unitsValues) {
      if (item == initUnit) {
        result = initNum * unitsValues[initUnit]
      }
    }
    return +result.toFixed(5) // returnNum rounded to 5 digits
  }

  this.getString = (initNum, initUnitString, returnNum, returnUnitString) => {
    let result = `${initNum} ${initUnitString} converts to ${returnNum} ${returnUnitString}`

    return result // string
  }
}

module.exports = ConvertHandler
