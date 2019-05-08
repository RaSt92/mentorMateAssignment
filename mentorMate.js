var newArr = [3,5,7,9,11]
const n = Number(newArr.shift())
const middle = Math.ceil(n / 2);
let asterisksTopLength = n;
let asterisksBottomLength = n - 1;
let dashesBottomLength = 1;
let dashesTopLength = n;
let result = '';

if(n > 2 && n < 10000){

for (let row = n; row >= 0; row -= 1) {
    for (let col = row; col > 0; col -= 1) {
        result += '-';
    }

    if (row >= middle) {
        for (let i = asterisksTopLength; i > 0; i -= 1) {
            result += '*';
        }

        for (let i = dashesTopLength; i > 0; i -= 1) {
            result += '-';
        }

        for (let i = asterisksTopLength; i > 0; i -= 1) {
            result += '*';
        }

        asterisksTopLength += 2;
        dashesTopLength -= 2;
    } else {
        for (let i = n; i > 0; i -= 1) {
            result += '*';
        }

        for (let i = dashesBottomLength; i > 0; i -= 1) {
            result += '-';
        }

        for (let i = asterisksBottomLength; i > 0; i -= 1) {
            result += '*';
        }

        // static divider
        result += '*';

        for (let i = asterisksBottomLength; i > 0; i -= 1) {
            result += '*';
        }

        for (let i = dashesBottomLength; i > 0; i -= 1) {
            result += '-';
        }

        for (let i = n; i > 0; i -= 1) {
            result += '*';
        }

        asterisksBottomLength -= 1;
        dashesBottomLength += 2;
    }

    for (let col = row; col > 0; col -= 1) {
        result += '-';
    }

    result += '\r\n';
}
console.log(result);

} 


