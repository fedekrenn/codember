function getSolution(number, movements) {
  const buffer = number.split("");
  let index = 0;

  for (let i = 0; i < movements.length; i++) {
    const turnAction = movements[i]
    let digit = parseInt(buffer[index])
    const isLastElement = buffer.length - 1 === index

    if (turnAction === 'R') {
      if (isLastElement){
        index = 0
      } else {
        index++
      }
    }

    if (turnAction === 'L') {
      if (index === 0) {
        index = buffer.length - 1
      } else {
        index--
      }
    }

    if (turnAction === 'U') {
      if (digit === 9) {
        digit = 0
      } else {
        digit++
      }

      buffer[index] = digit
    }

    if (turnAction === 'D') {
      if (digit === 0) {
        digit = 9
      } else {
        digit--
      }

      buffer[index] = digit
    }
  }

  return buffer.join('');
}

console.log(getSolution("528934712834", "URDURUDRUDLLLLUUDDUDUDUDLLRRRR"));
