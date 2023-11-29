import { readFile } from 'node:fs/promises'

const file = await readFile('./files/files_quarantine.txt', 'utf8')

function getValidCode (fileContent, index) {
  const data = fileContent
    .split('\r\n')
    .map((file, index) => {
      const [chain, unchecksum] = file.split('-')
      const checksum = chain
        .split('')
        .filter((char, index, self) => {
          return self.indexOf(char) === index && self.lastIndexOf(char) === index
        })
        .join('')

      return {
        position: index + 1,
        status: checksum === unchecksum ? 'valid' : 'invalid',
        unchecksum
      }
    })

  return data.filter(element => element.status === 'valid')[index - 1]
}

console.log(getValidCode(file, 33))
