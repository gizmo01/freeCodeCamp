/*
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.
*/

function convertToRoman(num) {
    let str = num.toString();
    let roman = [];
    let units = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    let dozens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    let hundreds = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM","M"];
    let strSlice = str.slice(0,str.length-3);

    if (str.length >= 4) {
        roman.unshift(units[str[str.length - 1]]);
        roman.unshift(dozens[str[str.length - 2]]);
        roman.unshift(hundreds[str[str.length - 3]]);
        for (let i = 0; i < strSlice; i++) {
            roman.unshift(hundreds[10]);
        }
    }
    else if (str.length == 3) {
        roman.unshift(units[str[2]]);
        roman.unshift(dozens[str[1]]);
        roman.unshift(hundreds[str[0]]);
    }
    else if (str.length == 2) {
        roman.unshift(units[str[1]]);
        roman.unshift(dozens[str[0]]);
    }
    else {
        roman.unshift(units[str[0]]);
    }
    return roman.join("");
}
convertToRoman(36);
