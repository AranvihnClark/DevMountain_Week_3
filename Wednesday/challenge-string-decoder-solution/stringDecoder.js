const decoder = code => {
  let charArr = code.split(``);
  let answer = ``;
  for(let i = 0; i < charArr.length; i++) {
    if(isNaN(Number(charArr[i]))) answer += charArr[i];
    else i += Number(charArr[i]);
  }
  return console.log(answer);
}
decoder('0y4akjfe0s');
decoder('0h2xce5ngbrdy');
decoder('2bna0p1mp2osl0e');