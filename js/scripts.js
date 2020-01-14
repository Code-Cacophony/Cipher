// User Sentence
var userText = function() {
    var userSentence = prompt("Enter a sentence!");
    return userSentence
}

// First and Last letter Capitalization regex

var letterCap = function(text) {
    var str = text;
    var firstLet = /^\w/;
    var lastLet = /\w$/;

    var firstLetr = firstLet.exec(str);
    var lastLetr = lastLet.exec(str);

    var firstLast = firstLetr + lastLetr;

    return firstLast.toUpperCase();

    //console.log(firstLast.toUpperCase());
}



// Reverse first and last

var letterRev = function(text) {
    return letterCap(text).split("").reverse("").join("");
}

//letterRev(letterCap(userText()));

// Bounce
var bounce = function() {
    var sentence = userText();
    return sentence + letterRev(letterCap(sentence));
}

//bounce();

// Random letter to start

var count = function() {
    var sentence = userText();
    var sentenceL = sentence.length;
    console.log(sentenceL); 
    var charIndex = Math.floor(sentenceL / 2);
    var charAtIndex = sentence.charAt(charIndex);
    return charAtIndex + bounce();  
}

count();
