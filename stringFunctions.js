function stringLength(string) {
    if (string.length < 1 || string.length > 10) {
        throw new Error('String must be between 1 and 10 characters');
    }
    return string.length;
}

function reverseString(string) {
    return string.split('').reverse().join('');
}

module.exports = { stringLength, reverseString };