// Test tools
import { strict as assert } from 'assert'
import { describe, it } from 'mocha'
// FileSystem
import { readFile } from 'fs/promises'
// Functions
import findLastValidUser from '../2022/solutions/reto1.js'
import convertAsciiToString from '../2022/solutions/reto2.js'
import countZebras from '../2022/solutions/reto3.js'
import findPassword from '../2022/solutions/reto4.js'
import findWinner from '../2022/solutions/reto5.js'
// Files
const file1 = await readFile('./2022/files/users.txt', 'utf8')
const file2 = await readFile('./2022/files/mecenas.json', 'utf8')
const file3 = await readFile('./2022/files/colors.txt', 'utf8')

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

describe('Reto 2', () => {
  it('El programa debería devolver una cadena de texto', () => {
    assert.equal(typeof convertAsciiToString(''), 'string')
  })
  it('El programa debería ser una función', () => {
    assert.equal(typeof convertAsciiToString, 'function')
  })
  it('El programa debería devolver la cadena de texto "hola mundo"', () => {
    assert.equal(convertAsciiToString('104111108097032109117110100111'), 'hola mundo')
  })
  it('El programa debería devolver la respuesta correcta', () => {
    const ascii = '11610497110107115 102111114 11210897121105110103 9911110010110998101114 11210810197115101 11510497114101'
    assert.equal(convertAsciiToString(ascii), 'thanks for playing codember please share')
  })
})

describe('Reto 3', () => {
  it('El programa debería ser una función', () => {
    assert.equal(typeof countZebras, 'function')
  })
  it('El programa debería devolver la respuesta correcta', () => {
    assert.equal(countZebras(file3), '30@red')
  })
})

describe('Reto 4', () => {
  it('El programa debería ser una función', () => {
    assert.equal(typeof findPassword, 'function')
  })
  it('El programa debería devolver la respuesta correcta', () => {
    assert.equal(findPassword(11098, 98123, 55), '165-23555')
  })
})

describe('Reto 5', () => {
  it('El programa debería ser una función', () => {
    assert.equal(typeof findWinner, 'function')
  })
  it('El programa debería devolver la respuesta correcta', () => {
    assert.equal(findWinner(file2), 'Diana-100')
  })
})
