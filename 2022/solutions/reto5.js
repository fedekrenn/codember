export default function findWinner (fileContent) {
  const parsedFile = JSON.parse(fileContent)

  const usersWithIndex = parsedFile.map((user, i) => `${user}-${i}`)

  const result = [...usersWithIndex]

  while (result.length > 1) {
    result.forEach((_, index) => {
      if (index === result.length - 1) {
        result.splice(0, 1)
      } else {
        result.splice(index + 1, 1)
      }
    })
  }

  return result[0]
}
