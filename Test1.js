for(let a = 0; a < 9; a++){
  let b = a < 5 ? a : 8 - a;
  let c = '';
  for(let d = 0; d < 4 - b; d++) c += ' ';
  for(let d = 0; d <= 2 * b; d++) c += d === 0 || d === 2 * b || b === 0 ? '*' : ' ';
  console.log(c);
}
