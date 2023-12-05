import { readFile } from 'node:fs/promises'

const file = await readFile('2022/files/colors.txt', 'utf-8')

export default function countZebras (fileContent) {
  const colors = JSON.parse(fileContent)

  const result = colors.slice(1).reduce((acc, color, index) => {
    if (color === colors[index]) {
      acc.currentStripeCount = 1
    } else if (color !== colors[index - 1]) {
      acc.currentStripeCount = 2
    } else {
      acc.currentStripeCount++

      if (acc.currentStripeCount > acc.maxStripeCount) {
        acc.maxStripeCount = acc.currentStripeCount
        acc.lastColor = colors[index - 1]
      }
    }
    return acc
  }, { currentStripeCount: 1, maxStripeCount: 1, lastColor: colors[0] })

  return `${result.maxStripeCount}@${result.lastColor}`
}

console.log(countZebras(file))
