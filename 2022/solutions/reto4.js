export default function findPassword (minNumber, maxNumber, position) {
  const numbers = []

  for (let i = minNumber; i <= maxNumber; i++) {
    const stringified = String(i)
    const includes55 = stringified.includes('55')
    const isOrdered = stringified.split('').sort().join('') === stringified

    if (isOrdered && includes55) {
      numbers.push(i)
    }
  }

  return `${numbers.length}-${numbers[position]}`
}

console.log(findPassword(11098, 98123, 55))
