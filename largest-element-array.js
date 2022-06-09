function largestelement(numbers) {

    let largest = 0;

    for (let i = 0; i < numbers.length; i++) {

        const element = numbers[i]

        if (element > largest) {

            largest = element;

        }
    }
    return largest;
}
const ages = [11, 22, , 55, 44, 88, 85, 25, 38];

const oldages = largestelement(ages);

console.log(oldages)