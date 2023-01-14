module.exports = function toReadable (number) {
     let ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight',
        'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
        'seventeen', 'eighteen', 'nineteen'];
        let tens = ['','', 'twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
        let numStr = String(number);
        if (number === 0) return 'zero'
        if (number < 20 ) return ones[number];
        if (number >= 20 && number < 100) return (tens[numStr.at(0)] + ' ' + ones[numStr.at(1)]).trim()
        if (number >=100 && (numStr.at(1) + numStr.at(2) < 20)) return (ones[numStr.at(0)] + ' hundred' + ' ' + ones[+(numStr.at(1) + numStr.at(2))]).trim();
        if (number >= 100) return (ones[numStr.at(0)] + ' hundred ' + tens[numStr.at(1)] + ' ' + ones[numStr.at(2)]).trim();

       
        }

/*  можно и так)
let ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight',
        'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
        'seventeen', 'eighteen', 'nineteen'];
        let tens = ['','', 'twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
        let numStr = String(number);
        if (number === 0) return 'zero'
        if (number < 20 ) return ones[number];
        if (numStr.length === 2) return (tens[numStr.at(0)] + ' ' + ones[numStr.at(1)]).trim();
        if (numStr.length === 3 && (numStr.at(1) + numStr.at(2)) <20 )  return (ones[numStr.at(0)] + ' hundred ' + ones[+(numStr.at(1) + numStr.at(2))]).trim()
        if (numStr.length === 3) return (ones[numStr.at(0)] +  ' hundred ' +  tens[numStr.at(1)] + ' ' + ones[numStr.at(2)]).trim();

*/

