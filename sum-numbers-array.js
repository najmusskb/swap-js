// sumation of an array

const numbers = [12, 13, 14, 12, 13, 14, 12, 13, 14];

let sum = 0;
for (let i = 0; i <= numbers.length; i++) {
    const element = numbers[i];
    sum = sum + element;
}
console.log(sum);






// function array sumation ;

function ArraytotalNumbers(number) {
    let sum = 0;
    for (let i = 0; i < number.length; i++) {

        // console.log(i);

        const element = number[i];
        sum = sum + element;
    }
    return sum;

}

const totalresult = ArraytotalNumbers([1, 1, 1, 20, 30, 40, 50, 40, 60]);

console.log("total sumation is :", totalresult);