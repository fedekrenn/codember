// Test tools
import { strict as assert } from 'assert'
import { describe, it } from 'mocha'
// FileSystem
import { readFile } from 'fs/promises'
// Functions
import countWords from '../solutions/reto1.js'
import decodeText from '../solutions/reto2.js'
import processFile from '../solutions/reto3.js'
import getValidCode from '../solutions/reto4.js'
import findHiddenMsg from '../solutions/reto5.js'
// Files
const file1 = await readFile('./files/message_01.txt', 'utf8')
const file2 = await readFile('./files/message_02.txt', 'utf8')
const file3 = await readFile('./files/encryption_policies.txt', 'utf8')
const file4 = await readFile('./files/files_quarantine.txt', 'utf8')
const file5 = await readFile('./files/database_attacked.txt', 'utf8')

describe('Reto 1', () => {
  it('El programa debería devuelva el número de veces que aparece cada palabra', () => {
    assert.equal(countWords(file1), 'murcielago15leon15jirafa15cebra6elefante15rinoceronte15hipopotamo15ardilla15mapache15zorro15lobo15oso15puma2jaguar14tigre10leopardo10gato12perro12caballo14vaca14toro14cerdo14oveja14cabra14gallina10pato10ganso10pavo10paloma10halcon11aguila11buho11colibri9canario8loro8tucan8pinguino7flamenco7')
  })
  it('El programa no debería devolver un string vacío', () => {
    assert.notEqual(countWords(file1), '')
  })
  it('El programa debería ser una función', () => {
    assert.equal(typeof countWords, 'function')
  })
})

describe('Reto 2', () => {
  it('El programa debería devuelva el mensaje oculto', () => {
    assert.equal(decodeText(file2), '024899455')
  })
  it('El programa no debería devolver un string vacío', () => {
    assert.notEqual(decodeText(file2), '')
  })
  it('El programa debería ser una función', () => {
    assert.equal(typeof decodeText, 'function')
  })
})

describe('Reto 3', () => {
  it('El programa debería devuelva la contraseña no válida en determinada posición', () => {
    assert.deepEqual(processFile(file3, 42), 'bgamidqewtbus')
  })
})

describe('Reto 4', () => {
  it('El programa debería devuelva el código válido en determinada posición', () => {
    assert.deepEqual(getValidCode(file4, 33), 'O2hrQ')
  })
})

describe('Reto 5', () => {
  it('El programa debería devuelva el mensaje oculto', () => {
    assert.deepEqual(findHiddenMsg(file5), 'youh4v3beenpwnd')
  })
  it('El programa no debería devolver un string vacío', () => {
    assert.notEqual(findHiddenMsg(file5), '')
  })
  it('El programa debería ser una función', () => {
    assert.equal(typeof findHiddenMsg, 'function')
  })
})
