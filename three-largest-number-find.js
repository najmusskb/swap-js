function findThreenumber(num1, num2, num3) {

    if (num1 >= num2 && num1 >= num3) {
        return num1;
    }
    else if (num2 >= num1 && num2 >= num3) {
        return num2;
    }
    else {
        return num3;
    }

}

const findnumberlargest = findThreenumber(120, 114, 30);
console.log("this is largest nuumber:", findnumberlargest);