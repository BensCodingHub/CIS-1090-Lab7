import words from "./words.js";

function binarySearch(needle, haystack){
    let start = 0;      //Green Bookmark
    let end = haystack.length;      //Red bookmark

    while( start < end){
        let middle = (start + end) / 2;
        middle = Math.floor(middle);
        let middleWord = haystack[middle];

        if ( middleWord == needle ){       //Remember, double equals is a true or false equation
            return true; //found the word
        }

        if ( middleWord < needle ){
            start = middle + 1;
        } else if( middleWord > needle){
            end = middle;
        }
    }

    return false; //did not find the word
}

export default function(word){
    return binarySearch(word, words);
}