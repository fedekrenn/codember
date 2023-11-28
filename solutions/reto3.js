import { readFile } from 'fs/promises'
const file = await readFile('./files/message_03.txt', 'utf8')

async function processFile (fileContent) {
  const passwordData = fileContent.split('\r\n').map(line => {
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

  return invalidPasswords.map((item, index) => {
    return {
      ...item,
      index: index + 1
    }
  })
}

processFile(file).then(result => console.log(result))
