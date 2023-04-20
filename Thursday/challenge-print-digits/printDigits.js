let printDigits = num => {
    // We start with reversedNum = 0 to get the first value properly below.
    let reversedNum = 0;
    while(num > 0){
        // We multiply reversedNum by 10 to shift the value up; ie: 0, 10, 100
        // It is important that reversedNum starts at 0 to the first reversed number.
        // The last value of num is the remainder and is gotten by (num % 10)
        // In the first loop, we get the incremented reversedNum, or (0), + the remainder, or (8).
        reversedNum = (reversedNum * 10) + (num % 10);

        // This is math to subtract the remainder we pulled from the total value.
        // We divide the value by ten to move the on to the next value.
        // ie: (34828 - (34828 % 10)) / 10
        //   = (34828 - (8)) / 10
        //   = (34820) / 10
        //   =  3482
        num = (num - (num % 10)) / 10;

        // In the second loop, we get the (8 * 10) and then plus the next remainder (2).
        // This will repeat until the value of num is 0, giving us our reversed value.
    }
    return reversedNum;
}

console.log(`The reverse of 34828 is:`, printDigits(34828));

let printDigits = num => {
    while(num > 0) {
        console.log(num%10);
        num = (num - (num % 10)) / 10;
    }
}