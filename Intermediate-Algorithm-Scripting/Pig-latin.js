/*
Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Input strings are guaranteed to be English words in all lowercase.
*/

function translatePigLatin(str) {
    let pattern = /[^aeiou]/;
    let pattern2 = /[aeiou]/;
    if (!pattern2.test(str)) {
        return str+ "ay";
    }
    if (!pattern.test(str[0])) {
        return str + "way";
    } else {
        for (let i = 1; i < str.length; i++) {
            if (!pattern.test(str[i])) {
                return str.slice(i) + str.slice(0, i) + "ay";
            }
        }
    }
}

translatePigLatin("ttttrrrrr");
