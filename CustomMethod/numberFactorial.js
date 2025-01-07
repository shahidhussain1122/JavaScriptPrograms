Number.prototype.factorial = function () {
    if (this < 0) {
        throw new Error("Negative numbers do not have factorial.");
    }
    if (this === 0 || this === 1) {
        return 1;
    }
    let result = 1;
    for (let i = 2; i <= this; i++) {
        result *= i;
    }
    return result;
};
