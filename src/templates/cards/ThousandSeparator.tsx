import React from 'react'

export interface ThousandSeparatorProps {
  number: number
}

export const isNumberAFloat = (number: number): boolean => {
  return Number(number) === number && number % 1 !== 0
}

export const roundToTwo = (number: number): string => {
  const roundedHundredths = Math.round(number * 100) * 0.01
  return isNumberAFloat(roundedHundredths)
    ? roundedHundredths.toFixed(2)
    : roundedHundredths.toString()
}

export const addSeparatorToNumber = (
  numberAsString: number | string,
  separator = '.',
  decimalSeparator = ','
): string => {
  numberAsString = numberAsString.toString()
  const splitNumber = numberAsString.split('.')
  let preDecimal = splitNumber[0]
  const decimal =
    splitNumber.length > 1 ? `${decimalSeparator}${splitNumber[1]}` : ''
  const rgx = /(\d+)(\d{3})/

  while (rgx.test(preDecimal)) {
    preDecimal = preDecimal.replace(rgx, `$1${separator}$2`)
  }

  return preDecimal + decimal
}

export const ThousandSeparator: React.FC<ThousandSeparatorProps> = ({
  number
}) => {
  return <>{number ? addSeparatorToNumber(roundToTwo(number)) : 0}</>
}
