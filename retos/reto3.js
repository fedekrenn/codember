import { readFile } from 'fs/promises'

const file = await readFile('./files/message_03.txt', 'utf8')

const arr = file.split('\r\n')

const objetoRefactorizado = arr.map(el => {
  const general = el.split(':')
  const otro = general[0].split(' ')
  const subdivision = otro[0].split('-')

  return {
    clave: general[1].trim(),
    letra: otro[1],
    cantidades: {
      min: subdivision[0],
      max: subdivision[1]
    }
  }
})

const final = objetoRefactorizado.map(el => {
  let count = 0
  el.clave.split('').forEach(letra => {
    if (letra === el.letra) {
      count++
    }
  })
  return {
    clave: el.clave,
    resultado: count >= el.cantidades.min && count <= el.cantidades.max
  }
})

const cantidades = final.filter(bla => bla.resultado === false)

const finalfinal = cantidades.map((el, i) => {
  return {
    ...el,
    indice: i + 1
  }
})

console.log(finalfinal)
