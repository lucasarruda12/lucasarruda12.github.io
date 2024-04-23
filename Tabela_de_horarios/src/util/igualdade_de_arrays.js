function arrays_sao_iguais(array, outroArray) {
  if(array === outroArray) return true;
  if (array.length !== outroArray.length) return false;

  for (let i = 0; i < array.length; i++){
    if (array[i] != outroArray[i]) return false;
  }

  return true;
}

// module.exports = arrays_sao_iguais;
