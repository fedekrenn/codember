import { readFile } from 'fs/promises'

const file = await readFile('./files/message_02.txt', 'utf8')

function decodeText (message) {
  const decoded = message.split('').reduce((acc, el) => {
    if (el === '#') acc.result[acc.index]++
    if (el === '@') acc.result[acc.index]--
    if (el === '*') acc.result[acc.index] = acc.result[acc.index] * acc.result[acc.index]
    if (el === '&') {
      const last = acc.result[acc.index]
      acc.index++
      acc.result[acc.index] = last
    }

    return acc
  }, { index: 0, result: [0] })

  decoded.result.pop()

  return decoded.result.join('')
}

console.log(await decodeText(file))
