const fibonacci = function(num) {
    num = +num;

    if (num <= 0) { return "OOPS"; }
    if (num == 1 || num == 2) { return 1; }

    let ans = 1;
    let prev = 1;
    let count = 3;
    let temp = 0;

    while (count <= num) {
        temp = ans;
        ans += prev;
        prev = temp;
        count++;
    }
    return ans;
};

// Do not edit below this line
module.exports = fibonacci;
