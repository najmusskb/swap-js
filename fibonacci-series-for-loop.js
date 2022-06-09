// fibonacci series for loop 
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55 orthat jeita man seita ager duita man er jog foler soman ... 


/* 3rd =2nd + 1st 

 4th = 3rd + 2nd 

 5th = 4th + 5th 

 119TH = 118th + 117th

 nth = (n-1)th + (n-2)th

 ith = (i-1)th + (i-2)

 */

const fibo = [0, 1];

for (let i = 2; i <= 10; i++) {

    //  ith = (i-1)th + (i-2)

    fibo[i] = fibo[i - 1] + fibo[i - 2];
}
console.log(fibo);
