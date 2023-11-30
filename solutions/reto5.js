import { readFile } from 'node:fs/promises'
import { z } from 'zod'

const file = await readFile('./files/database_attacked.txt', 'utf8')

export default function findHiddenMsg (fileContent) {
  const usersArray = fileContent.split('\r\n')

  const userSchema = z.object({
    id: z.string().regex(/^[a-zA-Z0-9]+$/),
    username: z.string().regex(/^[a-zA-Z0-9]+$/),
    email: z.string().email(),
    age: z.number().int().positive().optional(),
    location: z.string().optional()
  })

  const isValidParserArray = usersArray.map(userData => {
    const [id, username, email, age, location] = userData.split(',')

    const isValid = userSchema.safeParse({
      id,
      username,
      email,
      age: Number(age),
      location
    }).success

    return {
      id,
      username,
      email,
      age,
      location,
      isValid
    }
  })

  const invalidUsers = isValidParserArray.filter(user => !user.isValid)
  const hiddenMsg = invalidUsers.map(user => user.username[0]).join('')
  return hiddenMsg
}

console.log(findHiddenMsg(file))
