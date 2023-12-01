export default function processFile (fileContent, index) {
  const passwordData = fileContent
    .split('\r\n')
    .map(line => {
      const [rule, password] = line.split(': ')
      const [range, letter] = rule.split(' ')
      const [min, max] = range.split('-')

      return {
        password,
        letter,
        range: {
          min: Number(min),
          max: Number(max)
        }
      }
    })

  const passwordCheck = passwordData.map(item => {
    const letterCount = [...item.password].filter(char => char === item.letter).length

    return {
      password: item.password,
      isValid: letterCount >= item.range.min && letterCount <= item.range.max
    }
  })

  const invalidPasswords = passwordCheck.filter(item => item.isValid === false)

  return invalidPasswords[index - 1].password
}
