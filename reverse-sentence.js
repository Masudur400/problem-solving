function reverseWords(sentence) {
    return sentence.split(' ').map(word => word.split('').reverse().join('')).reverse().join(' '); 
}

const input = "Welcome to FANTASTIC SIX!";
const output = reverseWords(input);
console.log(output);