export default function findLastValidUser (fileContent) {
  const usersArr = fileContent.split('\r\n\r\n')

  const parsed = usersArr.map((user) => {
    const formmatted = user
      .replace(/\r\n/g, ' ')
      .split(' ')
      .map((item) => {
        const [key, value] = item.split(':')
        return [key, value]
      })

    const userObject = Object.fromEntries(formmatted)

    const isValid =
      userObject.hasOwnProperty('eme') &&
      userObject.hasOwnProperty('eme') &&
      userObject.hasOwnProperty('psw') &&
      userObject.hasOwnProperty('age') &&
      userObject.hasOwnProperty('loc') &&
      userObject.hasOwnProperty('fll')

    return {
      ...userObject,
      isValid
    }
  })

  const onlyValids = parsed.filter((user) => user.isValid)

  return onlyValids.length + onlyValids[onlyValids.length - 1].usr
}
