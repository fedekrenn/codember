export default function countWords (fileContent) {
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
