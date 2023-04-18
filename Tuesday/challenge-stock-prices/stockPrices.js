function best (arr) {
// A variable to hold the highest profit is needed.
// We'll store the new highest profit during each iteration of the loop below.
    let highestProfit = 0;

// The two variables below can be ignored. 
// Just added to show that the code does work as intended.
    let lowerNum = [];
    let highestNum = [];

// Two forEach methods are used to iterate through the array and locate the best combination for a profit.
// It is necessary to use two loops as we are comparing two values in the array.
    arr.forEach((el, i) => arr.forEach((el2, j) => {

// 'el2 - el > higehstProfit' is to see if the current indexes of the array will generate a higher profit.
// We use '&& j > i' to make sure that we don't include any reversed indexes further in the loop.
// We cannot buy something in the future to sell in the past/present.
        if((el2 - el) > highestProfit && j > i) {

// We now store the new highest profit below so we can log it later.
        highestProfit = el2 - el; 
        highestNum = [el2, j];
        lowerNum = [el, i];
        }
    }))

// At this time, the loops are complete and we should have the highest profit, what they are, 
// and where they are in the loop.
    return console.log(`Highest profit is $${highestProfit}.\nThe lowest value is $${lowerNum[0]} at hour ${lowerNum[1]}.\nThe highest value is $${highestNum[0]} at hour ${highestNum[1]}.\n`);
}

let checkProfit1 = [15, 10, 20, 22, 1, 9];
let checkProfit2 = [1, 2, 3, 4, 5];
let checkProfit3 = [2, 3, 10, 6, 4, 8, 1];
let checkProfit4 = [7, 9, 5, 6, 3, 2];
let checkProfit5 = [0, 100];

best(checkProfit1);
best(checkProfit2);
best(checkProfit3);
best(checkProfit4);
best(checkProfit5);