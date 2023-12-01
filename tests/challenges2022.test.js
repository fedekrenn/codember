// Test tools
import { strict as assert } from 'assert'
import { describe, it } from 'mocha'
// FileSystem
import { readFile } from 'fs/promises'
// Functions
import findLastValidUser from '../2022/solutions/reto1.js'
// Files
const file1 = await readFile('./2022/files/users.txt', 'utf8')

describe('Reto 1', () => {
  it('El programa debería devolver una cadena de text donde comience con el número de usuarios válidos y termine con el nombre del último usuario válido', () => {
    assert.equal(findLastValidUser(file1), '156@giroz')
  })
  it('El programa no debería devolver un string vacío', () => {
    assert.notEqual(findLastValidUser(file1), '')
  })
  it('El programa debería ser una función', () => {
    assert.equal(typeof findLastValidUser, 'function')
  })
})
