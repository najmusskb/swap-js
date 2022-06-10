// // recursion
// /* 3rd =2nd + 1st 

//  4th = 3rd + 2nd 

//  5th = 4th + 5th 

//  119TH = 118th + 117th

//  nth = (n-1)th + (n-2)th

//  ith = (i-1)th + (i-2)

//  */

// // [0, 1,   1, 2, 3, 5, 8, 13, 21, 34, 55]



// function fibonacciii(n) {
//     if (n == 0) {
//         return 0;
//     }
//     if (n == 1) {
//         return 1;
//     }

//     return fibonacciii(n - 1) + fibonacciii(n - 2);

// }

// const fiboelemen = fibonacciii(6);

// console.log(fiboelement);











// fibonacci series

function fibonacciseries(n) {
    if (n == 0) {
        return 0;
    }
    if (n == 1) {
        return [0, 1];
    }

    const fibo = fibonacciseries(n - 1);

    fibo[n] = fibo[n - 1] + fibo[n - 2];

    return fibo;

}

const fiboelements = fibonacciseries(13);

console.log(fiboelements);