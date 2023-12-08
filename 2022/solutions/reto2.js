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
