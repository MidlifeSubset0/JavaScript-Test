exports.simple = function () {
    return 'Bye';
}

exports.myDateTime = function() {
    return Date();
};

exports.numbers = function(a, b) {
    if (a > b){
        return 'Your first number is bigger';
    } else if (a == b) {
        return 'Your numbers are the same';
    } else {
        return 'Your second number is bigger';
    }
};