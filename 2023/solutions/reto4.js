export default function getValidCode (fileContent, index) {
  const data = fileContent
    .split('\r\n')
    .map((file, index) => {
      const [chain, unchecksum] = file.split('-')
      const checksum = chain
        .split('')
        .filter((char, _, self) => self.indexOf(char) === self.lastIndexOf(char))
        .join('')

      return {
        status: checksum === unchecksum ? 'valid' : 'invalid',
        unchecksum
      }
    })

  return data.filter(element => element.status === 'valid')[index - 1].unchecksum
}
