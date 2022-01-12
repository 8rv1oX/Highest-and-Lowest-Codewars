function highAndLow(numbers){
    numbers = numbers.split(' ').sort((a, b)=> Number(a)-Number(b))
    return [numbers[numbers.length-1], numbers[0]].join(' ')
  }