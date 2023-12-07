const cadena = '11610497110107115 102111114 11210897121105110103 9911110010110998101114 11210810197115101 11510497114101'

export default function convertAsciiToString (text) {
  const splitted = text.split(' ')

  const result = splitted.map(asciiWord => {
    const splittedWord = asciiWord.split('')
    let asciiToChar = ''

    while (splittedWord.length > 0) {
      if (splittedWord[0] === '9') {
        const char = splittedWord.splice(0, 2).join('')
        asciiToChar += String.fromCharCode(Number(char))
      } else {
        const char = splittedWord.splice(0, 3).join('')
        asciiToChar += String.fromCharCode(Number(char))
      }
    }

    return asciiToChar
  })

  return result.join(' ')
}

console.log(convertAsciiToString(cadena))
