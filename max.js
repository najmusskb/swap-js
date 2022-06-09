// find max value

const business = 450;
const minister = 350;
if (business > minister) {
    console.log("business person er pola is bigger then minister");
}
else {

    console.log('minister er pola is better then business man ');
}



// three number variable compare ________

const Business = 40;
const Minister = 20;
const army = 16;

if (business > minister && business > army) {
    console.log('business is bigger');
}
else if (minister > business && minister > army) {
    console.log('minister is best');
}

else {
    console.log('army is bigger');
}






// Function diye largest er value bahir kora 

function findlargest(first, second) {


    if (first > second) {
        return first;
    }
    else {
        return second;
    }
}
const larger = findlargest(3, 4)
console.log('largest is : ', larger);
