const hasMoreVowels = word => console.log(word.length - (word.toLowerCase().split(``).filter(letter => [`a`, `e`, `i`, `o`, `u`].includes(letter)).length) < (word.toLowerCase().split(``).filter(letter => [`a`, `e`, `i`, `o`, `u`].includes(letter)).length));

// function hasMoreVowels(word) {
//    let vowels = [`a`, `e`, `i`, `o`, `u`];
//    let temp = word.toLowerCase().split(``);
//    const vowelCount = temp.filter(letter => vowels.includes(letter)).length;
//    if ((temp.length - vowelCount) < vowelCount) return console.log(true);
//    else return console.log(false);
// }
hasMoreVowels(`tomorrow`);
hasMoreVowels(`moose`);