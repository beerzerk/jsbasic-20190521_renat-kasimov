/**
 * Power
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */
function pow(m, n) {
    let result = m;
  
    for (let i = 1; i < n; i++) {
      result *= m;
    }
  
    return result;
  }
  
  let m = prompt("m?", '');
  let n = prompt("n?", '');
  
  if (n < 1) {
    alert(`Степень ${n} не поддерживается, используйте натуральное число`);
  } else {
    alert( pow(m, n) );
  }