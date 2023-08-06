//Write a function that takes in an array of numbers. 
//The function should return True if any two numberss in list sum to 0, and false otherwise

function addtoZero(array) {
    for (i=0;i<array.length;i++){
        for ( j=i+1;j< array.length;j++){
            sum = array[i]+array[j]
            console.log(i,j,sum)
            if (sum === 0) {
                return true
            } 
        }
    }
    return false 
}

console.log(addtoZero([1, 2, 3, -2]))
//runtime: O(n^2)


//Write a function that takes in a single word, as a string. 
//It should return True if that word contains only unique characters. Return False otherwise.

function hasUniqueChars(word) {
    newword = word.toLowerCase()
    for (i=0;i<word.length; i++) {
        for (j=i+1; j<word.length; j++) {
            if (newword[i] == newword[j]) {
                return false
            }
        }
    }
    return true
}

console.log(hasUniqueChars("Monday"))
//runtime: O(n^2)


//A pangram is a sentence that contains all the letters of the English alphabet at least once, 
//like “The quick brown fox jumps over the lazy dog.”

function isPangram(sentence) {
    newsent = sentence.toLowerCase()
    alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    for (i=0; i<alphabet.length;i++){
        if (newsent.includes(alphabet[i]) == false) {
            return false
        }
    }
    return true
}

console.log(isPangram("The quick brown fox jumps over the lazy dog!"))
console.log(isPangram("I like cats, but not mice"))
//runtime: O(n)


//Write a function, find_longest_word, 
//that takes a list of words and returns the length of the longest one.

function findLongestWord(array) {
    var maxlength = 0
    for (i=0;i<array.length;i++){
        if (array[i].length > maxlength) {
            maxlength = array[i].length
        }
    }
    return maxlength
}

console.log(findLongestWord(["hi", "hello", 'abchdlojn']))
//runtime: O(n)