import { readFile } from 'fs/promises'

const file = await readFile('./files/message_01.txt', 'utf8')

function countWords (fileContent) {
  const arr = fileContent.split(' ')

  const totals = arr.reduce((acc, el) => {
    acc[el] ? acc[el]++ : acc[el] = 1
    return acc
  }, {})

  return Object
    .entries(totals)
    .flat()
    .join('')
}

console.log(countWords(file))
